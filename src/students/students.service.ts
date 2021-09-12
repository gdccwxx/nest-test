import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/students.entity';

@Injectable()
export class StudentsService {
    private readonly logger = new Logger(StudentsService.name);

    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
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
}
