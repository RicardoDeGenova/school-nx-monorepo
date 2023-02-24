import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from '../schedule/schedule.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './grid/grid.component';
import { TimeslotPipe } from './grid/pipes/timeslot.pipe';
import { SubjectPipe } from './grid/pipes/subject.pipe';
import { ClasstimePipe } from './grid/pipes/classtime.pipe';
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
providers: [TimeslotPipe],
  declarations: [ScheduleComponent, GridComponent, SubjectPipe, ClasstimePipe],
  imports: [CommonModule, AgGridModule, ScheduleRoutingModule],
})
export class ScheduleModule {}
