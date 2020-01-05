import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from 'src/services/translate.service';
import { LanguageEnum } from 'src/data/languages';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { absoluteRoute } from 'src/data/routes';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public isExpand: boolean;
  public absoluteRoute = absoluteRoute;
  public isAuthorized: boolean;
  private subscription: Subscription = new Subscription();

  constructor(private translateService: TranslateService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.subscription.add(
      this.userService.isAuthorizedStream()
        .subscribe(res => res
          .subscribe(isAuthorized => {
            this.isAuthorized = isAuthorized;
          }))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public setLanguage(language: LanguageEnum) {
    this.translateService.setLanguage(language);
  }

  public setExpand(isExpand: boolean) {
    this.isExpand = isExpand;
  }

  public getIsActive(currentRoute: string, mustBeEqual = false): boolean {
    return mustBeEqual ? this.router.url === currentRoute : this.router.url.startsWith(currentRoute);
  }

  public getIsActiveLanguage(language: LanguageEnum): boolean {
    return this.translateService.getLanguage() === language;
  }
}
