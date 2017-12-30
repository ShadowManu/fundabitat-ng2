import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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

  asSuffix(lang: Language): string { return LANGUAGE_SUFFIXES.get(lang)!; }

  setLanguage(lang: Language) {
    this.language = lang;
    this.language$.next(lang);
    this.setStorage(lang);
  }

  select<T>(data: LanguageData<T>): T { return data.get(this.language)!; }

  setStorage(lang: Language) { localStorage.setItem(LANGUAGE_STORAGE_KEY, lang); }

  readFromStorage(): Language { return (localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language) || 'es'; }
}
