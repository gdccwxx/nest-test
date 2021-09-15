import { IsNotEmpty, IsString } from 'class-validator';

export class ClassesDto {
    @IsNotEmpty()
    @IsString()
    className: string;

    students: number[]
}
