import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(private translateService: TranslateService) {
    this.translateService.use('pt');
  }

  changeLanguage(type: string) {
    this.translateService.use(type);
  }
}
