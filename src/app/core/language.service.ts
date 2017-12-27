import { Injectable } from '@angular/core';

export type Language = 'es' | 'en';

export type LanguageData<T> = Map<Language, T>;

const LANGUAGE_STORAGE_KEY = 'language';

const LANGUAGE_PREFIXES = new Map<Language, string>([
  ['es', ''],
  ['en', '-en']
]);

@Injectable()
export class LanguageService {
  language = this.readFromStorage();

  get prefix() { return LANGUAGE_PREFIXES.get(this.language); }

  setLanguage(lang: Language) {
    this.language = lang;
    this.setStorage(lang);
  }

  select<T>(data: LanguageData<T>): T { return data.get(this.language)!; }

  setStorage(lang: Language) { localStorage.setItem(LANGUAGE_STORAGE_KEY, lang); }

  readFromStorage(): Language { return (localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language) || 'es'; }
}
