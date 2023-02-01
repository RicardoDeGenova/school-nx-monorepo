import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from '../schedule/schedule.component';
import { Route, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './grid/grid.component';
import { TimeslotPipe } from './grid/timeslot.pipe';

const routes: Route[] = [
  {
    path: '',
    component: ScheduleComponent,
  },
];

@NgModule({
providers: [TimeslotPipe],
  declarations: [ScheduleComponent, GridComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AgGridModule],
})
export class ScheduleModule {}
