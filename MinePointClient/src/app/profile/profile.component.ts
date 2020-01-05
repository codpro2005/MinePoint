import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Token } from 'src/data/token';
import { UserService } from 'src/services/user.service';
import { TranslateService } from 'src/services/translate.service';
import * as moment from 'moment';
import { User } from 'src/data/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userMail: string;
  public expirationDate: Date;

  constructor(private cookieService: CookieService, private userService: UserService, private translateService: TranslateService) { }

  ngOnInit() {
    const user = this.userService.getUser();
    this.userMail = user.mail;
    this.expirationDate = new Date();
  }

  getExpirationDate() {
    const expirationMoment: moment.Moment = moment(this.expirationDate);
    return this.translateService.getCustomTranslated(expirationMoment.format('DD.MM.YYYY'), expirationMoment.format('MM/DD/YYYY'), expirationMoment.format('YYYY/MM/DD'));
  }
}
