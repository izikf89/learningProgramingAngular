import { Injectable } from '@angular/core';

@Injectable()
export class PageListService {
  list: Array<object>;

  basicList: Array<object> = [
    {name: 'רקע', link: 'basic/intro'},
    {name: 'התקנה', link: 'basic/install'},
    {name: 'שורת הפקודה', link: 'basic/commandLine'},
    {name: 'typescript & observable', link: 'basic/typescript'},
    {name: 'angular cli', link: 'basic/cli'},
    {name: 'המבנה של אנגולר - תיאוריה', link: 'basic/architecture'},
    {name: 'המבנה של אנגולר - מעשי', link: 'basic/example'},
  ];

  mainList: Array<object> = [
    {name: 'properties', link: 'main/properties'},
    {name: 'binding', link: 'main/binding'},
    {name: 'hashtag', link: 'main/hashtag'},
    {name: 'directive - built-in', link: 'main/directive-built-in'},
    {name: 'service', link: 'main/service'},
    {name: 'input - attribute', link: 'main/inputAttribute'},
    {name: 'event', link: 'main/event'},
    {name: 'directive - custom', link: 'main/directive-custom'},
    {name: 'hooks method', link: 'main/hooks-method'},
    {name: 'pipe', link: 'main/pipe'},
    {name: 'input', link: 'main/input'},
    {name: 'form', link: 'main/form'},
    {name: 'custom validation', link: 'main/custom-validation'},
    {name: 'form dynamic', link: 'main/form-dynamic'},
    {name: 'ajax', link: 'main/ajax'},
    {name: 'routing', link: 'main/routing'},
  ];
  
  advencedList: Array<object> = [
    {name: 'router event', link: 'advenced/router-event'},
    {name: 'multi router outlet', link: 'advenced/multi-router-outlet'},
    {name: 'lazy loading', link: 'advenced/lazy-loading'},
    {name: 'guard', link: 'advenced/guard'},
    {name: 'intercept', link: 'advenced/intercept'},
    {name: 'גישה לcomponents', link: 'advenced/get-children'},
    {name: 'dynamic-component', link: 'advenced/dynamic-component'},
    {name: 'angular-element', link: 'advenced/angular-element'},
    {name: 'styles', link: 'advenced/styles'},
    {name: 'services-provide', link: 'advenced/services-provide'},
    {name: 'services-inject', link: 'advenced/services-inject'},
    {name: 'animations-basic', link: 'advenced/animations'},
    {name: 'animations-methods', link: 'advenced/animations-methods'},
    {name: 'ng-content', link: 'advenced/ng-content'},
  ];

  allPages: Array<object> = this.basicList.concat(this.mainList, this.advencedList);  

  constructor() { }
}
