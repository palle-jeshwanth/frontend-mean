import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { environment } from '../../environments/environment';

const uri = environment.uri;
@Injectable()
export class TokenService implements HttpInterceptor {
  constructor() {}
  intercept(req: any, next: any): any {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
