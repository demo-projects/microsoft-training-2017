import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IsAdminGuard implements CanActivate, CanDeactivate<any> {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }


 canDeactivate(component: any): boolean {
    return false;
  }
}
