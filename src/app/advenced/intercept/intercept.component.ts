import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intercept',
  templateUrl: './intercept.component.html',
  styleUrls: ['./intercept.component.css']
})
export class InterceptComponent implements OnInit {

  service: string = 
`import {Injectable} from '@angular/core';
@Injectable()
export class ServiceName {
  intercept(req, next) {    
    return next.handle(req);
  }
}`;
  importHTTP_INTERCEPTORS: string = `import {HTTP_INTERCEPTORS} from '@angular/common/http';`;
  providers: string = `providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServiceNameS, multi: true }],`;
  module: string = 
`import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServiceName } from 'myFile.ts';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServiceName, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }`;
  allParams: string = `req.params.keys().forEach(param=> {console.log(req.params.get(param))});`
  allPa2rams: string = ``
  allPar3ams: string = ``
  allP1arams: string = ``

  clone: string = 
`@Injectable()
export class ServiceName {
    intercept(req, next) {            
      let newReq = req.clone();
      return next.handle(newReq)
    }
}`;
  changeUrl: string = `let newReq = req.clone({ url: 'newUrl' });`;
  changeParams: string = `newReq = req.clone({ setParams:{'key':'newValue'} });`;
  importHttpParams: string = `import { HttpParams } from '@angular/common/http/';`;
  replaceParams: string = `let newReq = req.clone({ params: new HttpParams().set('key', 'value') });`;
  replaceBody: string = `let newReq = req.clone({ body: {key: 'value'} });`;
  changeHeader: string = `let newReq = req.clone({setHeaders:{'Accept': 'my-auth-token'}});`;
  changeMethod: string = `let newReq = req.clone({method:'post'});`;
  importDo: string = `import 'rxjs/add/operator/do';`;
  do: string = 
`return next.handle(newReq).do(event => {
  console.log(event);  
});`;
  importMap: string = `import { map  } from 'rxjs/operators';`;
  importHttpResponse: string = `import { HttpResponse } from '@angular/common/http'; `;
  map: string = 
`return next.handle(req).map((event: HttpEvent<any>) => {
  if (event instanceof HttpResponse) {
    return event.clone({
      body: 'new body'
    });
  }
});`;  
  constructor() { }

  ngOnInit() {
  }

}


