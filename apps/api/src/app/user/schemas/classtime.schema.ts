import { Prop, Schema } from '@nestjs/mongoose';
import { ClassTime as IClassTime } from '@school-nx-monorepo/api-interfaces';

@Schema()
export class ClassTime implements IClassTime {
    @Prop()
    timeSlot: number;

    @Prop()
    day: 'segunda' | 'terça' | 'quarta' | 'quinta' | 'sexta';
}