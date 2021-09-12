import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
    ImStudent(name?: string) {
        return 'Im student ' + name;
    }
}
