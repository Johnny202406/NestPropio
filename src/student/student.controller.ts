import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('student')
export class StudentController {
        @Get()
        getStudent(){
            return['aron','jesus','soldevilla',' jokabel']
        }
        
}