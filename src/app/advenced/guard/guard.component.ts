import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent implements OnInit {

  importToPath: string = `{ path: 'url', component: MyComponent, canActivate: [serviceName] }`;
  canActivePath: string = `{ path: 'url', component: MyComponent, canActivate: [serviceName] }`;
  canActive: string = 
`@Injectable()
export class serviceName {
  canActivate() {    
    return false;
  }
}`;
  canDeactivate: string = 
`@Injectable()
export class serviceName {
  canDeactivate(component) {
    return false;
  }
}`;
  canDeactivatePath: string = `{ path: 'url', component: MyComponent, canDeactivate: [serviceName] }`;
  reslove: string = 
`@Injectable()
export class serviceName {
  resolve() {
    alert()
    return false;
  }
}`;
  reslovePath: string = `{ path: 'url', component: MyComponent, resolve: [serviceName] }`;
  canLoad: string = 
`@Injectable()
export class serviceName {
  canLoad() {
    alert('canLoad block!');
    return false;
  }
}`;
  canLoadPath: string = `{ path: 'url', loadChildren: './lazy-loading.module#SecondModule', canLoad: [serviceName] }`;

  constructor() { }

  ngOnInit() {
  }

}
