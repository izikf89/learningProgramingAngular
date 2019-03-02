import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.css']
})
export class LazyLoadingComponent implements OnInit {

  secondModule: string = 
`import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-b',
  template: '<h1>B</h1>',
})
export class MyComponent  {}

const routes: Routes = [
  { path: '', component: MyComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }

@NgModule({
  imports:      [ RootRoutingModule ],
  declarations: [ MyComponent ]
})
export class SecondModule { }
`;
loadChildren: string = `{ path: 'url', loadChildren: './lazy-loading.module#SecondModule' }`;
importPreload: string = `import { PreloadAllModules } from '@angular/router';`;
preloadAll: string = `{ enableTracing: false, preloadingStrategy: PreloadAllModules }`;
preloadAllComplate: string = 
`@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false, preloadingStrategy: PreloadAllModules } 
  )],
  exports: [RouterModule]
})
export class RootRoutingModule { }`;
preloadService: string = 
`import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class serviceName {
  preload(route: Route, load: () => Observable<any>) {
    if (route.data && route.data['preload']) {
      return load();
    } else {
      return Observable.of(null);
    }
  }
}`;
preloadCertain: string = `{ enableTracing: false, preloadingStrategy: serviceName }`;
preloadCertainComplate: string = 
`@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false, preloadingStrategy: serviceName } 
  )],
  exports: [RouterModule]
})
export class RootRoutingModule { }
`;
preloadInPath: string = `data: { preload: true }`;
preloadInPathComplate: string = `{ path: 'url', loadChildren: './lazy-loading.module#SecondModule', data: { preload: true } }`;
l2oadChildren1: string = ``;
lo3adChildren1: string = ``;
loa4dChildren1: string = ``;
load5Children1: string = ``;

  constructor() { }

  ngOnInit() {
  }

}
