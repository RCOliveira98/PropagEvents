import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorTokenService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const service = this.injector.get(AuthService);
    const tokenizedReq = req.clone({
      setHeaders: {
        authorization: `Bearer ${service.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
