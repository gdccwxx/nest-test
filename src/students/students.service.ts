import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
    ImStudent() {
        return 'Im student';
    }
}
