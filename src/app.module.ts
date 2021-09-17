import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { UserGuard } from './common/guards/user.guard';
import { SensitiveInterceptor } from './common/interceptors/sensitive.interceptor';
import { SensitiveModule } from './sensitive/sensitive.module';

@Module({
  imports: [
    StudentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1qaz2wsx',
      database: 'school',
      autoLoadEntities: true,
      logger: 'debug',
      synchronize: true, // 数据库自动同步 entity 文件修改
    }),
    SensitiveModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: UserGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: SensitiveInterceptor,
    },
    AppService,
  ],
})
export class AppModule { }
