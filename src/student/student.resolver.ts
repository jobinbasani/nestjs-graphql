import { CreateStudentInput } from './create-student.input';
import { StudentType } from './student.type';
import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { StudentService } from './student.service';

@Resolver(of=>StudentType)
export class StudentResolver{

    constructor(private studentService:StudentService){}

    @Mutation(returns=>StudentType)
    async createStudent(
        @Args('createStudentInput')createStudentInput:CreateStudentInput
    ){
        return this.studentService.createStudent(createStudentInput);
    }

}