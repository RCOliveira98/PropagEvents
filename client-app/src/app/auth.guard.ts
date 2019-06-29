
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{

  constructor(
    private service: AuthService,
    private roteador: Router) {}

    canActivate(): boolean {
      if (this.service.loggedIn()) {
        return true;
      }
      this.roteador.navigate(['/login']);
      return false;
    }
}
