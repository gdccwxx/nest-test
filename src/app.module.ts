import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { UserGuard } from './common/guard/user.guard';

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
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: UserGuard,
    },
    AppService
  ],
})
export class AppModule { }
