import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { absoluteRoute } from 'src/data/routes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentRoute: string = state.url;
    const isSignedIn = this.userService.isSignedIn();
    const authenticateRoute = absoluteRoute.authenticate;
    const profileRoute = absoluteRoute.profile;
    const disallowAuthenticate: boolean = currentRoute === authenticateRoute && isSignedIn;
    const disallowProfile: boolean = currentRoute === profileRoute && !isSignedIn;
    if (disallowAuthenticate || disallowProfile) {
      if (disallowAuthenticate) {
        this.router.navigateByUrl(profileRoute);
      }
      if (disallowProfile) {
        this.router.navigateByUrl(authenticateRoute);
      }
      return false;
    }
    return true;
  }
}