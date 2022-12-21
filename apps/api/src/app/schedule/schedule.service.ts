import { Injectable } from '@nestjs/common';
import { UserRespository } from '../user/user.repository';
import { ClassroomScheduleResponse, TeacherScheduleResponse } from './response';

@Injectable()
export class ScheduleService {
    constructor(private readonly userRepository: UserRespository) { }

    async getSchedule(): Promise<TeacherScheduleResponse[]> {
        const allUsers = await this.userRepository.findAll({});
        const schedule = allUsers.map((user) => new TeacherScheduleResponse(user.name, user.teacher));
        return schedule as TeacherScheduleResponse[];
    }

    async getTeacherScheduleById(id: string): Promise<TeacherScheduleResponse | null> {
        const user = await this.userRepository.findOne({ id });
        if (user.teacher === undefined) return null;

        return new TeacherScheduleResponse(user.name, user.teacher);
    }

    async getClassroomScheduleByName(name: string): Promise<ClassroomScheduleResponse | null> {
        const query = { teacher: { $not: { $eq: null } } };

        const users = await this.userRepository.findAll(query);
        if (!users) return null;

        const classrooms = users.map(function (user) {
            if (!user.teacher) return;
            if (!user.teacher.classrooms) return;

            const filtered = user.teacher.classrooms.filter((classroom => classroom.name === name));
            
            return filtered;
        });
        
        const flatClassrooms = classrooms.flat().sort((n1,n2) => {
            if (n1.time.time > n2.time.time) return 1;
            if (n1.time.time < n2.time.time) return -1;
            return 0;
        });

        return new ClassroomScheduleResponse(name, flatClassrooms);
    }
}
