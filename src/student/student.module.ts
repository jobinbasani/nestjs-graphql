import { StudentResolver } from './student.resolver';
import { Student } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Student]),
  ],
  providers: [StudentResolver, StudentService],
  exports:[StudentService]
})
export class StudentModule {}
