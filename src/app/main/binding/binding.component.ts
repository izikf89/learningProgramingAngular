import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  example1: string =   
`export class MyComponent {
  myPropetry = 'red'
}`;

example2: string = `{{ myPropetry }}`;
example3: string = `{{ myMethod() }}`;
example4: string = `{{ myPropetry++ }}`;
example5: string = `{{ 1 + 1 }}`;
example6: string = `{{ myMethod() }}`;
example7: string = `myMethod() { return 'value' }`;
example8: string =  `myPropetry = 'red'`;
example9: string =  `<h1 [style.color]='myPropetry'>example</h1>`;
example10: string =  `myMethod() { alert() }`;
example11: string =  `<button (click)='myMethod()'`;
toView: string =  
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>{{ name }}</h1>',
})
export class AppComponent  {
  name = 'Angular 5';
}`;
toAttribute: string =  
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1 [style.color]="colorName" >angular 5</h1>',
})
export class AppComponent  {
  colorName = 'red';
}`;
toScript: string =  
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<button (click)="myMethod()">press me</button>',
})
export class AppComponent  {
  myMethod() { alert() };
}`;

constructor() { }

  ngOnInit() {
  }

}
