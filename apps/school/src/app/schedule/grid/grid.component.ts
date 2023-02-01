import { Component } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ScheduleRow } from './schedule-row';
import { TimeslotPipe } from './timeslot.pipe';

@Component({
  selector: 'school-nx-monorepo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
    constructor(private readonly timeSlotPipe: TimeslotPipe){}    
    private gridApi!: GridApi<ScheduleRow>;
    private gridColumnApi!: ColumnApi;

    rowData: ScheduleRow[] = [{     
        teacher: 'Teacher A', classroom: { 
            name: '6A', type: 'tradicional', time: { 
                timeSlot: 1, day: 'segunda' 
            }, 
            subject: { 
                name: 'Arte', group: 'Outros'
            } 
        } 
    }];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  onGridReady(params: GridReadyEvent<ScheduleRow>) {
    params.api.sizeColumnsToFit();
    const colDefs = params.api.getColumnDefs();
    console.log(colDefs);
    if (colDefs === undefined) return;
    console.log(colDefs);
    const keys = Object.keys(this.rowData[0])
    keys.forEach(key => colDefs?.push({field : key}));
    console.log(keys);
    params.api.setColumnDefs(colDefs);
        
        // add the data to the grid
        
    params.api.setRowData(this.rowData);
  }
}
