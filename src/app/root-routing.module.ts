import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'basic', loadChildren: 'app/basic/basic.module#BasicModule'},
  {path: 'main', loadChildren: 'app/main/main.module#MainModule'},
  {path: 'advenced', loadChildren: 'app/advenced/advenced.module#AdvencedModule'},
  {path: 'contact', component: ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: 'basic/intro'},
  {path: '**', pathMatch: 'full', redirectTo: 'basic/intro'},
];

@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      { 
          enableTracing: false,
          preloadingStrategy: PreloadAllModules 
      } 
    ),],
  exports: [RouterModule]
})
export class RootRoutingModule { }
