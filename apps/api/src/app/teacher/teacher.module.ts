import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from './schemas/teacher.schema';
import { TeacherRepository } from './teacher.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }])
  ],
  controllers: [TeacherController],
  providers: [
    TeacherService,
    TeacherRepository,
    TeacherService
  ]
})
export class TeacherModule { }
