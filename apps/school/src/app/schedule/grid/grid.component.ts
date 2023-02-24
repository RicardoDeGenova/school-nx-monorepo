import { Component, Input } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ScheduleResponse } from '../schedule';
import { ScheduleService } from '../schedule.service';
import { TimeslotPipe } from './pipes/timeslot.pipe';

@Component({
  selector: 'school-nx-monorepo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  constructor(private readonly scheduleService: ScheduleService,
    private timeSlotPipe: TimeslotPipe) {}
    @Input() isAdmin = false;

  rowData$: Observable<ScheduleResponse[]> = this.scheduleService.getSchedule();

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: this.isAdmin
  };

  colDefs: ColDef<ScheduleResponse>[] =[
    {field: 'teacherName'},
    {field: 'subject'},
    {field: 'day'},
    {field: 'timeSlot', valueFormatter: v => this.timeSlotPipe.transform(v.value)},
    {field: 'classroomName'},
    {field: 'classroomType'},
  ]
}
