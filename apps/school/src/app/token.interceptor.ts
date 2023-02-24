import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2dudkBnbWFpbC5jb20iLCJzdWIiOiI2M2M5NDJkMzJkY2U1NTI3ZTBhYTdiYTkiLCJpYXQiOjE2NzcxNTQ1NzUsImV4cCI6MTY3Nzc1OTM3NX0.vAgijR-1J0A1Op770-g6DNp9myU2lpyMiurbCcpi8sM`
      }
    });

    return next.handle(request);
  }
}