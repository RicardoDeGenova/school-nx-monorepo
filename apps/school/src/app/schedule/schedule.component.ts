import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleResponse } from './response/schedule';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'school-nx-monorepo-schedule',
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent implements OnInit {
  constructor(private readonly scheduleService: ScheduleService) {}
  rowData: ScheduleResponse[] = [];

  ngOnInit() {
    this.getRowData();
  }

  getRowData(): Observable<ScheduleResponse[]> {
    const schedule = this.scheduleService.getSchedule();
    schedule.subscribe((rows: ScheduleResponse[]) => this.rowData = rows);
    return schedule;
  }
}
