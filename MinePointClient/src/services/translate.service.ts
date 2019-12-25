import { Injectable } from '@angular/core';
import { LanguageEnum, languages } from 'src/data/languages';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private languageSubject: BehaviorSubject<LanguageEnum>;
  private languageObservable: Observable<LanguageEnum>;
  private language: LanguageEnum;

  constructor() {
    const sessionLanguage = localStorage.getItem('language') as LanguageEnum;
    this.languageSubject = new BehaviorSubject(sessionLanguage ? sessionLanguage : LanguageEnum.German);
    this.languageObservable = this.languageSubject.asObservable();
    this.languageObservable
      .subscribe(res => this.language = res);
  }

  public getTranslatedStream(value: string): Observable<string> {
    return this.languageObservable
      .pipe(
        map(language => {
          return languages[language][value];
        })
      );
  }

  public getTranslated(value: string): string {
    return languages[this.language][value];
  }

  public setLanguage(language: LanguageEnum) {
    this.languageSubject.next(language);
    localStorage.setItem('language', language);
  }

  public getLanguageStream(): Observable<LanguageEnum> {
    return this.languageObservable;
  }

  public getLanguage(): LanguageEnum {
    return this.language;
  }

  public getCustomTranslated(onGerman: string, onEnglish: string, onChinese: string): string {
    const paramaterLanguages: string[] = [onGerman, onEnglish, onChinese];
    const languagesKeys: string[] = Object.keys(languages);
    if (paramaterLanguages.length !== languagesKeys.length) {
      throw new Error('Given amount of strings does not match amount of languages.');
    }
    return paramaterLanguages[languagesKeys.findIndex(language => language === this.language)];
  }
}

