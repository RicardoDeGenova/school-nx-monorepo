import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classtime'
})
export class ClasstimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
