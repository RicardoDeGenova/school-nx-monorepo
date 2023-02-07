import { Pipe, PipeTransform } from '@angular/core';
import { Subject, SubjectName } from '@school-nx-monorepo/api-interfaces';

@Pipe({
  name: 'subject'
})
export class SubjectPipe implements PipeTransform {

  transform(value: Subject, ...args: unknown[]): SubjectName {
    return value.name;
  }

}
