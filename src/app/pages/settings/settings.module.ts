import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { SettingRoutes } from './setting.routes';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(SettingRoutes)
  ]
})
export class SettingsModule { }
