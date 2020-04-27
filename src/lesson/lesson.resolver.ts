import { LessonType } from './lesson.type';
import { Resolver, Query } from "@nestjs/graphql";

@Resolver(of => LessonType)
export class LessonResolver{
    @Query(returns=>LessonType)
    lesson(){
        return{
            id:'adedgr897',
            name:'Phsysics Class',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString()
        }
    }
}