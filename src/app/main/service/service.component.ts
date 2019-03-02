
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  serviceExample: string = 
`  import { Injectable } from '@angular/core';

  @Injectable()
  export class MyService {
    
    num = 1;
   
    myMethod() { 
      return ++this.num; 
    }
  }`;
  injectServiceNew: string = `@Injectable({providedIn: 'root'})`;
  injectServiceNewComplate: string = 
`import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MyService {
  
  num = 1;
  
  myMethod() { 
    return ++this.num; 
  }
}`;
  moduleExample: string = 
`  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  
  import { AppComponent } from './app.component';
  import { MyService } from './my-service.service';
  
  @NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    providers:    [ MyService ],
    bootstrap:    [ AppComponent ]
  })
  export class AppModule { }`;
  constractorExample: string = `constractor(name: MyService) {}`;
  privateExample: string = `constractor(private name: MyService) {}`;
  getServiceExample: string = 
`  import { Component } from '@angular/core';
  import { MyService } from './my-service.service';
  
  @Component({
    selector: 'my-app',
    template: '<h1> property: {{ property }}, method: {{ method }}',
   
  })
  export class AppComponent  {
  
    constructor (private service: MyService ) {}
  
    property = this.service.num;
    method = this.service.myMethod();
  }`;

  providersComponent: string = `@Component({selector: 'app-root', tamplate:'', providers: [ MyService ])}`;

  constructor() { }

  ngOnInit() {
  }

}
