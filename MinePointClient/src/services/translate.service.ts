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
          const text = languages[language][value];
          if (text === undefined) {
            console.error(`Text couldn\'t be found for value ${value} in ${language}`);
          }
          return text;
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
  public getLanguageAsNum(): number {
    switch (this.language) {
      case LanguageEnum.German:
        return 0;
      case LanguageEnum.English:
        return 1;
      case LanguageEnum.Chinese:
        return 2;
    }
  }

  public getCustomTranslated(onGerman: string, onEnglish: string, onChinese: string): string {
    const paramaterLanguages: string[] = [onGerman, onEnglish, onChinese];
    const languagesKeys: string[] = Object.keys(languages);
    if (paramaterLanguages.length !== languagesKeys.length) {
      console.error('Given amount of strings does not match amount of languages.');
    }
    return paramaterLanguages[languagesKeys.findIndex(language => language === this.language)];
  }
}

