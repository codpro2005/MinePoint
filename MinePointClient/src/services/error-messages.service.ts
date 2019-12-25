import { Injectable } from '@angular/core';
import { TranslateService } from './translate.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagesService {

  constructor(private translateService: TranslateService) { }

  public getPasswordMinLengthError(minLength: number): string {
    return this.translateService.getCustomTranslated(`Das Passwort muss mindestens ${minLength} Zeichen lang sein.`, `The password must be at least ${minLength} characters long.`, `密码长度必须至少为${minLength}个字符。`);
  }

  public getPasswordMaxLengthError(maxLength: number): string {
    return this.translateService.getCustomTranslated(`Das Passwort darf nicht mehr als ${maxLength} Zeichen lang sein.`, `The password must not be more than ${maxLength} characters long.`, `密码长度不能超过${maxLength}个字符。`);
  }

  public getPasswordDigitMinError(digitMin: number): string {
    return this.translateService.getCustomTranslated(`Das Passwort muss mindestens ${digitMin} Ziffer enthalten.`, `The password must contain at least ${digitMin} digits.`, `密码必须至少包含${digitMin}位数字。`);
  }

  public getPasswordUpperMinError(upperMin: number): string {
    return this.translateService.getCustomTranslated(`Das Passwort muss mindestens ${upperMin} Grossbuchstaben enthalten.`, `The password must contain at least ${upperMin} capital letters.`, `密码必须至少包含${upperMin}个大写字母。`);
  }
}
