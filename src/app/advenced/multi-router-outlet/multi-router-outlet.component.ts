import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-router-outlet',
  templateUrl: './multi-router-outlet.component.html',
  styleUrls: ['./multi-router-outlet.component.css']
})
export class MultiRouterOutletComponent implements OnInit {

  name: string = '<router-outlet name="routerName"></router-outlet>';
  path: string = `{ path: 'url', component: MyComponent, outlet: 'routerName' }`;
  routerLink: string = `<a [routerLink]="[{ outlets: { routerName: ['url'] } }]">link</a>`;
  routerLinkComplate: string =
`import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  template: 
    \`
    <a [routerLink]='[{ outlets: { secondRouter: ["A"] } }]'>A</a>
    <a [routerLink]='[{ outlets: { secondRouter: ["B"] } }]'>B</a>

    <router-outlet name='secondRouter'></router-outlet>\`,
})
export class AppComponent  {}

@Component({ selector: 'app-a', template: '<h1>A</h1>' })
export class AComponent  {}

@Component({ selector: 'app-b', template: '<h1>B</h1>'})
export class BComponent  {}

const routes: Routes = [
  { path: 'A', component: AComponent, outlet: 'secondRouter' },
  { path: 'B', component: BComponent, outlet: 'secondRouter' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
`;  
  script: string = `this.router.navigate([{outlets: { routerName: 'url' }}]);`;
  scriptComplate: string = 
`import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: 
    \`<button (click)='getPath()'>link</button>
    <router-outlet name='secondRouter'></router-outlet>\`,
})
export class AppComponent  {

  constructor(private router: Router) {}

  getPath() { this.router.navigate([{outlets:{secondRouter: 'url'}}]); }
}`;
  close: string = `this.router.navigate([{outlets:{routerName: null}}]);`;
  closeComplate: string = 
`import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: 
    \`<a [routerLink]='[{ outlets: { secondRouter: ["A"] } }]'>A</a>
    <a [routerLink]='[{ outlets: { secondRouter: ["B"] } }]'>B</a>

    <button (click)='close()'>close</button>

    <router-outlet name='secondRouter'></router-outlet>\`,
})
export class AppComponent  {

  constructor(private router: Router) {}

  close() {
    this.router.navigate([{outlets:{secondRouter: null}}]);
  }
}
`;

  constructor() { }

  ngOnInit() {
  }

}
