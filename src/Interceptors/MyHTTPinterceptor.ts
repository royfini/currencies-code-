import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isApiRequest = request.url.startsWith('https://api.fastforex.io/currencies?');

    if (isApiRequest) {
      request = request.clone({
        setParams: {
          'api_key': 'ccbf8d41bd-6cd81968d8-s09p4a'
        }
      });
    }

    return next.handle(request);
  }
}
