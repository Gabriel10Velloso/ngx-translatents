import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then((n)=> n.HomeModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then((n)=> n.SettingsModule)
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        // preloadingStrategy: PreloadAllModules,
        // useHash: false,
      })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }