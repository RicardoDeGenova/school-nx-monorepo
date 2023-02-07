import { Component, Input } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ScheduleResponse } from '../response/schedule';

@Component({
  selector: 'school-nx-monorepo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() rowData$: ScheduleResponse[] = [];
  private gridApi!: GridApi<ScheduleResponse>;

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  //valueFormatter: v => this.timeSlotPipe.transform(v.value) },
  onGridReady(params: GridReadyEvent<ScheduleResponse>) {
      const colDefs = params.api.getColumnDefs();
      if (colDefs === undefined) return;
      const keys = Object.keys(this.rowData$[0]);
      keys.forEach((key) => colDefs?.push({ field: key }));
      params.api.setColumnDefs(colDefs);
      //params.api.auto();
    
    // add the data to the grid

    params.api.setRowData(this.rowData$);
  }
}
