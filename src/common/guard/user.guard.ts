import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.body.user;

    if (request.method !== 'POST') {
        return true;
    }

    const noCheck = this.reflector.get<string[]>('no-user', context.getHandler());

    if (noCheck) {
        return true;
    }

    if (user) {
        return true;
    }

    throw new UnauthorizedException('need user field');
  }
}