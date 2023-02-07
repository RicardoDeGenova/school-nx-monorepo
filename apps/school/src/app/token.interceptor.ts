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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpY2dudkBnbWFpbC5jb20iLCJzdWIiOiI2M2M5NDJkMzJkY2U1NTI3ZTBhYTdiYTkiLCJpYXQiOjE2NzU1MTUxMTksImV4cCI6MTY3NjExOTkxOX0.hICzYfvHvYq9oDHyZukMu-bSkeP0DQ_DEnfkvxWfGF8`
      }
    });

    return next.handle(request);
  }
}