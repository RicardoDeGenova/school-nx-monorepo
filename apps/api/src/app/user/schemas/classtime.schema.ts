import { Prop, Schema } from '@nestjs/mongoose';
import { ClassTime as IClassTime } from '@school-nx-monorepo/api-interfaces';

@Schema()
export class ClassTime implements IClassTime{
    @Prop()
    time: number;

    @Prop()
    day: 'Segunda' | 'Terça' | 'Quarta' | 'Quinta' | 'Sexta';

    @Prop()
    hour: string;
}