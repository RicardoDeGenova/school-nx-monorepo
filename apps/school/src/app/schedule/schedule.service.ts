import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ScheduleResponse } from './schedule';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private scheduleUrl = 'http://127.0.0.1:3333/api/schedule';

  constructor(private http: HttpClient) {}

  getSchedule(): Observable<ScheduleResponse[]> {
    return this.http.get<ScheduleResponse[]>(this.scheduleUrl).pipe(
        catchError(this.handleError<ScheduleResponse[]>('getSchedule', [])),
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

//   private log(message: string) {
//     this.messageService.add(`HeroService: ${message}`);
//   }
}
