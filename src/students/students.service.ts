import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/students.entity';
import { Classes } from './entities/classes.entity';

@Injectable()
export class StudentsService {
    private readonly logger = new Logger(StudentsService.name);

    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        @InjectRepository(Classes)
        private readonly classRepository: Repository<Classes>,
    ) {}

    ImStudent(name?: string) {
        this.logger.log(`student name is ${name}`);
        return 'Im student ' + name;
    }

    async getStudentName(id: number) {
        this.logger.log(`get student id is ${id}`);
        const results = await this.studentRepository.find({ id });

        return results ?? 'not found';
    }

    async setStudent(name: string) {
        console.log('name', name);
        const results = this.studentRepository.save({
            name: name,
        })
        console.log('results', results);
        return results;
    }

    async setClass(name: string, studentIds: number[]) {
        const students = await this.studentRepository.find({
            where: studentIds,
        });
        console.log('students', students);
        const result = await this.classRepository.save({
            className: name,
            students: students, // 此处直接保存students 的实例，即直接从数据库取出来的数据
        })

        return result;
    }
    async findClass(id: number) {
        const result = await this.classRepository.find({
            where: {
                id,
            },
            relations: ['students']
        })
        return result;
    }
}
