import { Body, Controller, Get, Post, Query, ParseIntPipe } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDto } from './dtos/students.dto';
import { User } from '../common/decorators';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}
  
    @Get('who-are-you')
    whoAreYou(@Query('name') name: string) {
        return this.studentsService.ImStudent(name);
    }

    @Post('who-are-you')
    whoAreYouPost(@Body() student: StudentDto) {
        return this.studentsService.ImStudent(student.name);
    }

    @Post('who-is-request')
    whoIsReq(@User() user: string) {
        return user;
    }

    @Get('get-name-by-id')
    getNameById(@Query('id', ParseIntPipe) id: number) {
        return this.studentsService.getStudentName(id);
    }

    @Post('set-student-name')
    setStudentName(@User() user: string) {
        return this.studentsService.setStudent(user);
    }
}
