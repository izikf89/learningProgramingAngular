import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-dynamic',
  templateUrl: './component-dynamic.component.html',
  styleUrls: ['./component-dynamic.component.css']
})
export class ComponentDynamicComponent implements OnInit {
  import: string = `import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';`;
  constructorMethod: string = `constructor(public vcr: ViewContainerRef, private cfr: ComponentFactoryResolver) { }`;
  module: string = 
`import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, ComponentDynamic }  from './app.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ 
        AppComponent,
        ComponentDynamic
    ],
    entryComponents: [ ComponentDynamic ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}`;
  i6mport: string = ``;
  import7: string = ``;
  impor6t: string = ``;
  impo5rt: string = ``;
  im3port: string = ``;
  imp4ort: string = ``;
  complateExample: string = 
`import {  Component, Directive, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<ng-template d-dinamic ></ng-template>'
})
export class AppComponent {}

@Component({ 
  selector: '', 
  template: '<h1> i am component dynamic!</h1>'
})
export class Component1 {}

@Directive ({ selector: '[d-dinamic]' })
export class DinaminDirective {
    constructor(public vcr: ViewContainerRef, private cfr: ComponentFactoryResolver) { }
    
    ngOnInit() {
      let newComponent = this.cfr.resolveComponentFactory(Component1);
        this.vcr.createComponent(newComponent);
    }
}
`








  constructor() { }

  ngOnInit() {
  }

}
