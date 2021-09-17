import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SensitiveService } from '../../sensitive/sensitive.service';
import { SensitiveType } from '../../sensitive/constants';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class SensitiveInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector, private sensitiveService: SensitiveService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    const type = this.reflector.get<SensitiveType | undefined>('sensitive-operation', context.getHandler());

    if (!type) {
        return  next.handle();
    }

    return next
      .handle()
      .pipe(
        tap((data) => this.sensitiveService.setSensitive(type, request.url, request.body, data)),
      );
  }
}