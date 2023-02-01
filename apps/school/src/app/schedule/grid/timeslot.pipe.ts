import { Pipe, PipeTransform } from '@angular/core';

type TimeSlotValue =
  | '7:00 - 7:45'
  | '7:45 - 8:30'
  | '9:00 - 9:45'
  | '9:45 - 10:30'
  | '10:30 - 11:15'
  | '11:15 - 12:00'
  | '13:30 - 14:15'
  | '14:15 - 15:00'
  | '15:00 - 15:45';

@Pipe({
  name: 'timeslot',
})
export class TimeslotPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): TimeSlotValue {
    switch(value){
        default: return '7:00 - 7:45';
        case 2: return '7:45 - 8:30';
        case 3: return '9:00 - 9:45';
        case 4: return '9:45 - 10:30';
        case 5: return '10:30 - 11:15';
        case 6: return '11:15 - 12:00';
        case 7: return '13:30 - 14:15';
        case 8: return '14:15 - 15:00';
        case 9: return '15:00 - 15:45';
    }
  }
}