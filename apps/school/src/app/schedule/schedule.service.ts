import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ScheduleResponse } from './response/schedule';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private scheduleUrl = 'http://localhost:3333/api/schedule';

  constructor(private http: HttpClient) {}

  getSchedule(): Observable<ScheduleResponse[]> {
    const schedule = this.http.get<ScheduleResponse[]>(this.scheduleUrl);

    return schedule.pipe(
        catchError(this.handleError<ScheduleResponse[]>('getSchedule', [])),
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

//   private log(message: string) {
//     this.messageService.add(`HeroService: ${message}`);
//   }
}
