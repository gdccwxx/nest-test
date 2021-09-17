import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    return request.body.user;
  },
);

export const NoUser = () => SetMetadata('no-user', true);