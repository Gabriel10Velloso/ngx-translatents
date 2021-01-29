import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';


// export function rootLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
// }

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new MultiTranslateHttpLoader(httpClient, [
      {prefix: "./assets/i18n/", suffix: ".json"},
      {prefix: "./assets/i18n/testando/", suffix: ".json"},
  ]);
}


@NgModule({

  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        // useFactory: rootLoaderFactory,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }

    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
