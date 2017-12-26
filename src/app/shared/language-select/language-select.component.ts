import { Component } from '@angular/core';

import { LanguageService } from 'app/core';

@Component({
  selector: 'fd-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent {
  constructor(private langSvc: LanguageService) { }

  onSpanish() { this.langSvc.setLanguage('es'); }

  onEnglish() { this.langSvc.setLanguage('en'); }
}