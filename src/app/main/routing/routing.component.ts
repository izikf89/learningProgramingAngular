import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  tag: string = `<router-outlet></router-outlet>`;
  import: string = `import { Routes, RouterModule } from '@angular/router';`;
  module: string = 
`import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot()],
  exports: [RouterModule]
})
export class RootRoutingModule { }`;
  path: string = `{ path: 'url', component: MyComponent }`;
  ruoting: string = 
`import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  template: 
    \`<a routerLink='A'>A</a>
    <a routerLink='B'>B</a>
    <router-outlet></router-outlet>\`,
})
export class AppComponent  {}

@Component({
  selector: 'app-a',
  template: '<h1>A</h1>',
})
export class AComponent  {}

@Component({
  selector: 'app-b',
  template: '<h1>B</h1>',
})
export class BComponent  {}

const routes: Routes = [
  { path: 'A', component: AComponent },
  { path: 'B', component: BComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
`;
  redirectTo: string = `{ path: 'C', redirectTo: 'A' },`;
  redirectToComplate: string = 
`const routes: Routes = [
  { path: 'A', component: AComponent },
  { path: 'B', component: BComponent },
  { path: 'C', redirectTo: 'A' },
];
`;
  twiceRedirectTo: string = 
`const routes: Routes = [
  { path: 'A', component: AComponent },
  { path: 'B', component: BComponent },
  { path: 'C', redirectTo: 'D' },
  { path: 'D', redirectTo: 'A' },
];`;
  pathMatch: string = `{ path: '', pathMatch:'full', component: MyComponent },`;
  specialPath: string = `{ path: '**', component: MyComponent },`;
  routerLinkActive: string = `<a routerLink='url' routerLinkActive='css-class-a, css-class-b'>link</a>`;
  queryParams: string = `<a routerLink='url' [queryParams]='{parameter:"value"}'>link</a>`;
  pathParameter: string = `{path: 'myPath/:prematerName', component: MyComponent}`;
  importParameter: string = `import { ActivatedRoute, Router } from '@angular/router';`;
  ConstructorParameter: string = `constructor(private route: ActivatedRoute, private router: Router ) { }`;
  navigation: string = `this.router.navigate(['url']);`;
  sendQueryParams: string = `this.router.navigate(['url'], { queryParams:{key: 'value'} });`;
  sendParams: string = `this.router.navigate(['url', 'parameter']);`;
  data: string = `{ path: 'url', component: MyComponent, data: { key: 'value' } }`;
  specialPath12: string = ``;
  specialPath11: string = ``;



  constructor() { }

  ngOnInit() {
  }

}



