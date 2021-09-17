import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import {  } from './common/guard/user.guard';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(),
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
