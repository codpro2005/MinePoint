import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fullApi } from 'src/data/api';
import { Mail } from 'src/data/mail';
import { TranslateService } from './translate.service';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private controller = 'Mail/';

  constructor(private http: HttpClient, private translateService: TranslateService) { }

  private get controllerApi(): string {
    return `${fullApi}${this.controller}`;
  }

  public sendMail(mail: Mail): Observable<boolean> {
    return this.http.post<boolean>(`${this.controllerApi}PostContactMail`, mail);
  }

  public sendPasswordForgottenMail(recipient: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.controllerApi}PostPasswordForgottenMail?recipient=${recipient}&language=${this.translateService.getLanguageAsNum()}`, null);
  }
}
