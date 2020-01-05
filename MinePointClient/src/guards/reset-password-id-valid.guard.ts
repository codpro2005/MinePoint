import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { absoluteRoute } from 'src/data/routes';
import { map } from 'rxjs/operators';
import { RouteService } from 'src/services/route.service';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordIdValidGuard implements CanActivate {

  constructor(private router: Router, private routeService: RouteService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const passwordId: string = state.root.children[0].params.id;
    return this.routeService.getResetPasswordIdValid(passwordId)
      .pipe(
        map(passwordIdValid => {
          if (!passwordIdValid) {
            this.router.navigateByUrl(absoluteRoute.resetPasswordFail);
            return false;
          }
          return true;
        })
      );
  }
}
