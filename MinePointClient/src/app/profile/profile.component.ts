import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Token } from 'src/data/token';
import { UserService } from 'src/services/user.service';
import { TranslateService } from 'src/services/translate.service';
import * as moment from 'moment';
import { User } from 'src/data/user';
import { Router } from '@angular/router';
import { absoluteRoute } from 'src/data/routes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService, private translateService: TranslateService, private router: Router) { }

  ngOnInit() {
    this.userService.updateUser()
      .subscribe(user => this.user = user);
  }

  public getSubscriptionExpirationDate(): string {
    const currentDate: Date = new Date(Date.now());
    let currentLatestDate: Date = currentDate;
    this.user.subscriptions.forEach(subscription => {
      const subscriptionExpirationDate: Date = new Date(subscription.expiration);
      if (subscriptionExpirationDate.getTime() > currentLatestDate.getTime()) {
        currentLatestDate = subscriptionExpirationDate;
      }
    });
    return currentLatestDate.getTime() !== currentDate.getTime() ? this.getDateFormat(currentLatestDate) : this.translateService.getTranslated('now');
  }

  public getDateFormat(dateFormat: Date): string {
    const expirationMoment: moment.Moment = moment(dateFormat);
    return this.translateService.getCustomTranslated(expirationMoment.format('DD.MM.YYYY'), expirationMoment.format('MM/DD/YYYY'), expirationMoment.format('YYYY/MM/DD'));
  }

  public signOut() {
    this.userService.deleteUserCookie();
    this.userService.checkAuthorized();
    this.router.navigateByUrl(absoluteRoute.authenticate.self);
  }
}
