import { Module } from '@nestjs/common';
import { SensitiveController } from './sensitive.controller';
import { SensitiveService } from './sensitive.service';
import { Sensitive } from './entities/sensitive.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SensitiveController],
  imports: [TypeOrmModule.forFeature([Sensitive])],
  providers: [Sensitive, SensitiveService],
  exports: [SensitiveService],
})
export class SensitiveModule {}
