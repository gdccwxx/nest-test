import { Module } from '@nestjs/common';
import { Student } from './entities/students.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
    imports: [TypeOrmModule.forFeature([Student])],
    providers: [StudentsService, Student],
    controllers: [StudentsController],
})
export class StudentsModule {}
