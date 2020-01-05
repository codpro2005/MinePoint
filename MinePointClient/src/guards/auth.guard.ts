import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user.service';
import { absoluteRoute } from 'src/data/routes';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentRoute: string = state.url;
    const notAuthenticatedRoutes: string[] = [absoluteRoute.authenticate.self, absoluteRoute.resetPassword, absoluteRoute.resetPasswordId];
    const authenticatedRoutes: string[] = [absoluteRoute.profile];
    const redirectNotAuthenticated: string = absoluteRoute.authenticate.self;
    const redirectAuthenticated: string = absoluteRoute.profile;
    return this.userService.isAuthorized()
      .pipe(
        map(isSignedIn => {
          const disallowAuthenticate: boolean = isSignedIn && !!notAuthenticatedRoutes.find(route => currentRoute.startsWith(route));
          const disallowNotAuthenticated: boolean = !isSignedIn && !!authenticatedRoutes.find(route => currentRoute.startsWith(route));
          if (disallowAuthenticate || disallowNotAuthenticated) {
            if (disallowAuthenticate) {
              this.router.navigateByUrl(redirectAuthenticated);
            }
            if (disallowNotAuthenticated) {
              this.router.navigateByUrl(redirectNotAuthenticated);
            }
            return false;
          }
          return true;
        })
      );
  }
}
