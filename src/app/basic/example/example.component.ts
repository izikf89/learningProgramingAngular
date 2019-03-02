import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  componentFile: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}`;

  moduleFile: string = 
`import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`

   selectorExample: string =
`@Component({
  selector: 'app-root',
})`;

  typescriptExample: string = 
`export class AppComponent {
  title = 'app';
}`;

  htmlCssExample1: string = 
`@Component({
  selector: 'app-root',
  template: '<h1>hello world!</h1>',
  styles: ['h1{ color: green }']
})`;
  
  htmlCssExample2: string = 
`@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})`;
}
