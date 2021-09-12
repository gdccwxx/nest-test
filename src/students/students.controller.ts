import { Controller, Get, Post } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}
  
    @Get('who-are-you')
    whoAreYou() {
        return this.studentsService.ImStudent();
    }

    @Post('who-are-you')
    whoAreYouPost() {
        return this.studentsService.ImStudent();
    }
}
