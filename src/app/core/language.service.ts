import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';

export type Language = 'es' | 'en';

export type LanguageData<T> = Map<Language, T>;

const LANGUAGE_STORAGE_KEY = 'language';

const LANGUAGE_SUFFIXES = new Map<Language, string>([
  ['es', ''],
  ['en', '-en']
]);

@Injectable()
export class LanguageService {
  language = this.readFromStorage();
  language$ = new BehaviorSubject<Language>(this.language);

  get suffix(): string { return LANGUAGE_SUFFIXES.get(this.language)!; }

  asSuffix(lang: Language): string { return LANGUAGE_SUFFIXES.get(lang)!; }

  setLanguage(lang: Language) {
    this.language = lang;
    this.language$.next(lang);
    this.setStorage(lang);
  }

  select<T>(data: LanguageData<T>): T { return data.get(this.language)!; }

  setStorage(lang: Language) { localStorage.setItem(LANGUAGE_STORAGE_KEY, lang); }

  readFromStorage(): Language { return (localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language) || 'es'; }

  runWithLang<T>(projection: (lang: Language) => Observable<T>): Observable<T> {
    return this.language$.pipe(
      switchMap(projection)
    );
  }

  runWithLangSuffix<T>(projection: (lang: Language) => Observable<T>): Observable<T> {
    return this.language$.pipe(
      map(lang => this.asSuffix(lang)),
      switchMap(projection)
    );
  }
}
