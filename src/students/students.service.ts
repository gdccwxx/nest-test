import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class StudentsService {
    private readonly logger = new Logger(StudentsService.name);

    ImStudent(name?: string) {
        this.logger.log(`student name is ${name}`);
        return 'Im student ' + name;
    }

    getStudentName(id: number) {
        this.logger.log(`get student id is ${id}`);
        const ID_NAME_MAP = {
            1: 'gdccwxx',
        };

        return ID_NAME_MAP[id] ?? 'not found';
    }
}
