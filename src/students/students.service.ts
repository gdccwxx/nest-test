import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
    ImStudent(name?: string) {
        return 'Im student ' + name;
    }

    getStudentName(id: number) {
        const ID_NAME_MAP = {
            1: 'gdccwxx',
        };

        return ID_NAME_MAP[id] ?? 'not found';
    }
}
