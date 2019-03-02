import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputAttributeComponent implements OnInit {
  importInput: string = `import { Input } from '@angular/core';`;
  inputDecoratedComplate: string = 
`import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`<app-child [newAttribute]="'hello world'" ></app-child>\`,
})
export class AppComponent  { }

@Component({
  selector: 'app-child',
  template: \`<h1>{{ result }}</h1>\`,
})
export class ChildComponent  {
  @Input('newAttribute') result;
}`;
  inputDecoratedShort: string =
`import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`<app-child [newAttribute]="'hello world'" ></app-child>\`,
})
export class AppComponent  { }

@Component({
  selector: 'app-child',
  template: \`<h1>{{ newAttribute }}</h1>\`,
})
export class ChildComponent  {
  @Input() newAttribute;
}`;
  inputPropertyComplate: string = 
`import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`<app-child [newAttribute]="'hello world'" ></app-child>\`,
})
export class AppComponent  { }

@Component({
  selector: 'app-child',
  template: \`<h1>{{ result }}</h1>\`,
  inputs: [ 'result:newAttribute'],
})
export class ChildComponent  {
  result;
}`;
  inputPropertyShort: string =
`import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template:\`<app-child [newAttribute]="'hello world'" ></app-child>\`,
})
export class AppComponent  { }

@Component({
  selector: 'app-child',
  template: \`<h1>{{ newAttribute }}</h1>\`,
  inputs: [ 'newAttribute'],
})
export class ChildComponent  {
  result;
}`;  

  constructor() { }

  ngOnInit() {
  }

}
