import { Injectable } from '@angular/core';
import { LanguageEnum, languages } from 'src/data/languages';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private languageSubject: BehaviorSubject<LanguageEnum>;
  private language: LanguageEnum;

  constructor() {
    const sessionLanguage = sessionStorage.getItem('language') as LanguageEnum;
    this.languageSubject = new BehaviorSubject(sessionLanguage ? sessionLanguage : LanguageEnum.German);
    this.languageSubject.asObservable().subscribe(res => this.language = res);
  }

  public getTranslatedStream(value: string): Observable<string> {
    return this.languageSubject.asObservable().pipe(map(language => {
      return languages[language][value];
    }));
  }

  public getTranslated(value: string): string {
    return languages[this.language][value];
  }

  public setLanguage(language: LanguageEnum) {
    this.languageSubject.next(language);
    sessionStorage.setItem('language', language);
  }

  public getLanguageStream(): Observable<LanguageEnum> {
    return this.languageSubject.asObservable();
  }

  public getLanguage(): LanguageEnum {
    return this.language;
  }
}

