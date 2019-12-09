import { Component } from '@angular/core';
import { TranslateService } from 'src/services/translate.service';
import { LanguageEnum } from 'src/data/languages';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isExpand: boolean;

  constructor(private translateService: TranslateService, private router: Router) { }

  public setLanguage(language: LanguageEnum) {
    this.translateService.setLanguage(language);
  }

  public setExpand(isExpand: boolean) {
    this.isExpand = isExpand;
  }

  public getIsActive(route: string): boolean {
    return this.router.url === route;
  }

  public getIsActiveLanguage(language: LanguageEnum): boolean {
   return this.translateService.getLanguage() === language;
  }
}
