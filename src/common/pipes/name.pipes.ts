import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class TransformNamePipe implements PipeTransform {
  transform(name: string, metadata: ArgumentMetadata) {
    return `🇨🇳 ${name.trim()}`;
  }
}
