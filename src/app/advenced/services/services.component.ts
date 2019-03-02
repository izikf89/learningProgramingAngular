import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  providersObject: string = `providers: [{ provide: MyClass, useClass: MyClass }]`;
  useClass: string = `providers: [ {provide: ServiceName, useClass: MyService} ]`;
  useClassComplate: string = 
`import {Component, Injectable} from '@angular/core';

@Injectable()
export class ServiceOldS {
  text = 'old service'
}

@Injectable()
export class ServiceNewS {
    text = 'new service'
}   

@Component({
    selector: 'my-app', 
    template: '<h1>{{ text }}</h1>'
}) export class AppComponent {
    text;
  
    constructor(private service: ServiceOldS ) {
        this.text= this.service.text;
    }
}    

/***********  module **********/
  
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, ServiceOldS, ServiceNewS } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [ {provide: ServiceOldS, useClass: ServiceNewS} ],
    bootstrap: [AppComponent]
})
export class AppModule { }
`;
  useExisting: string = `providers: [ ServiceNewS, {provide: ServiceOldS, useExisting: ServiceNewS} ]`;
  useValue: string = `providers: [ { provide: ServiceName, useValue: 'string' } ]`;
  useValueComplate: string = 
`import { Component, Inject } from '@angular/core';

let value = 'my value' ;

class Interface {}; 

@Component({
    selector: 'my-app', 
    template: '<h1>{{ text }}</h1>',
    providers: [ { provide: Interface, useValue: value } ],
}) export class AppComponent {
    text;

    constructor(myVariable: Interface) {
        this.text = myVariable;
    }
}`;
  importForwardRef: string = `import { forwardRef } from '@angular/core';`;
  forwardRef: string = `providers: [{provide: ServiceOldS, useClass: forwardRef(() => ServiceNewS)}]`;
  forwardRefComplate: string = 
`import {Component, Injectable, forwardRef} from '@angular/core';

export class ClassCL { value; }

@Component({
    selector: 'my-app',
    template: '<h1>{{ text }}</h1>',
    providers: [{provide: ClassCL, useClass: forwardRef(() => ForwardRefS)}]
})
export class AppComponent {
    text;

    constructor( myClass: ClassCL ) {
        this.text = myClass.value;
    }
}

Injectable()
export class ForwardRefS { value = 'forwardRef work!' }`;
  factory: string = `  providers: [{ provide: MyService, useFactory: () => new MyService('i factory') }]`;
  factoryComplate: string = 
`import {Component, Injectable} from '@angular/core';

@Injectable()
export class MyService {
  text;

  constructor(private newText) {
    this.text = newText;
  }
}

@Component({
  selector: 'my-app', 
  template: '<h1>{{ text }}</h1>',
  providers: [{ provide: MyService, useFactory: () => new MyService('i factory') }]
}) export class AppComponent {
  text;

  constructor(private service: MyService ) {
    this.text = this.service.text;
  }
}`;
  deps: string = `providers: [DepsService,{ provide: MyService, useFactory: (deps: DepsService) => new MyService(deps), deps: [DepsService] }]`;


  constructor() { }

  ngOnInit() {
  }

}
