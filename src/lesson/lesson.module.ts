import { Lesson } from './lesson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([Lesson])
    ],
    providers:[LessonResolver, LessonService]
})
export class LessonModule {}
