import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { SettingRoutes } from './setting.routes';



@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingRoutes)
  ]
})
export class SettingsModule { }
