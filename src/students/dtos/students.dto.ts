import { IsNotEmpty, IsString } from 'class-validator';

export class StudentDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
