import { Component, Input } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { GridRow } from './grid';
import { TimeslotPipe } from './timeslot.pipe';

@Component({
  selector: 'school-nx-monorepo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
    constructor(private readonly timeSlotPipe: TimeslotPipe){}    
    private gridApi!: GridApi<GridRow>;
    private gridColumnApi!: ColumnApi;

  @Input() dayName = 'Monday';

  rowData: GridRow[] = [
    { day: 'Monday', timeSlot: 1, classroom: '6A', teacher: 'Teacher A' },
    { day: 'Monday', timeSlot: 2, classroom: '6A', teacher: 'Teacher A'  },
    { day: 'Monday', timeSlot: 3, classroom: '6B', teacher: 'Teacher A'  },
    { day: 'Monday', timeSlot: 4, classroom: '6B', teacher: 'Teacher A'  },
    { day: 'Monday', timeSlot: 5, classroom: '6B', teacher: 'Teacher B'  },
    { day: 'Monday', timeSlot: 6, classroom: '6B', teacher: 'Teacher B'  },
    { day: 'Monday', timeSlot: 7, classroom: '6B', teacher: 'Teacher B'  },
    { day: 'Monday', timeSlot: 8, classroom: '6B', teacher: 'Teacher A'  },
    { day: 'Monday', timeSlot: 9, classroom: '6B', teacher: 'Teacher A'  },
  ];

  colDefs: ColDef<GridRow>[] = [
    { field: 'day' },
    { field: 'timeSlot', valueFormatter: v => this.timeSlotPipe.transform(v.value) },
    { field: 'classroom' },
    { field: 'teacher' },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };

  onGridReady(params: GridReadyEvent<GridRow>) {
    params.api.sizeColumnsToFit();
  }
}
