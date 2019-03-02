import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable()
export class InfoService {

  constructor() { }

  isSmallScreen(): boolean {
    return window.innerWidth < 992; 
  }

  addRoutesForMobile(routes: Routes) {
    for(let i in routes) {
      let value =  JSON.parse(JSON.stringify(routes[i]));
      value.path = value.path + '-mobile';
      value.outlet = 'mobile';
      value.component = routes[i].component;
      routes.push( value);
    }
    return routes;
  }
}
