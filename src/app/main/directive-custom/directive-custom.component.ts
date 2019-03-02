import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-custom',
  templateUrl: './directive-custom.component.html',
  styleUrls: ['./directive-custom.component.css']
})
export class DirectiveCustomComponent implements OnInit {

  selectorExample: string = "@Directive { selector: 'app-directive-name' } export class AppMyDirectiveName";

  elementRef: string = 
`import { Component, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[colorRed]' 
})
export class ColorRed {
  constructor(private elm: ElementRef) {
    elm.nativeElement.style.color = 'red'
  }
}

@Component({
  selector: 'my-app',
  template: '<h1 colorRed >directive</h1>',
})
export class AppComponent { }`
event: string =
`import { Component, Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[app-my-directive]' 
})
export class MyDirective {
  @HostListener('click', ['$event']) myMethod(e) {
    alert(e);
  }
}

@Component({
  selector: 'my-app',
  template: '<h1 app-my-directive >click me</h1>',
})
export class AppComponent { }`;
input: string =
`import { Component, Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-color]' 
})
export class ColorDirective {
  @Input('color') color;

  constructor(private elm: ElementRef) {}
 
  ngOnInit() {   
    this.elm.nativeElement.style.color = this.color;
  }
}

@Component({
  selector: 'my-app',
  template: \`<h1 app-color [color]="'red'" >directive - input</h1>\`,
})
export class AppComponent { }`;
inputSelf: string =
`import { Component, Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-color]' 
})
export class ColorDirective {
  @Input('app-color') color;

  constructor(private elm: ElementRef) {}
 
  ngOnInit() {   
    this.elm.nativeElement.style.color = this.color;
  }
}

@Component({
  selector: 'my-app',
  template: \`<h1 [app-color]="'red'" >directive - input</h1>\`,
})
export class AppComponent { }`;
selectorTag: string = 
`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, MyDirective } from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MyDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
`;
selectorClass: string = 
`import { Component, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1 class="directiveClass">tag class</h1>',
})
export class AppComponent  {}

@Directive({
  selector: '.directiveClass',
})
export class MyDirective  { 
  constructor(elm: ElementRef) { elm.nativeElement.style.color = 'red'; }
 }
`;
selectorReceive: string = 
`import { Component, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1 recieve=value >recieve</h1>'
})
export class AppComponent  {}

@Directive({
  selector: '[recieve=value]',
})
export class MyDirective  { 
  constructor(elm: ElementRef) { elm.nativeElement.style.color = 'red'; }
}`;
selectorTagOnly: string = 
`import { Component, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1 my-directive >tag only</h1>'
})
export class AppComponent  {}

@Directive({
  selector: 'h1[my-directive]',
})
export class MyDirective  { 
  constructor(elm: ElementRef) { elm.nativeElement.style.color = 'red'; }
}`;
selectorExist: string = 
`import { Component, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1 type=text>change-exist</h1>'
})
export class AppComponent  {}

@Directive({
  selector: '[type]',
})
export class MyDirective  { 
  constructor(elm: ElementRef) { elm.nativeElement.style.color = 'red'; }
}`;
selectorNot: string = 
`import { Component, Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    \`<h1>yes</h1>
    <h2>yes</h2>
    <h3>yes</h3>
    <h4>not</h4>\`,
})
export class AppComponent  { }

@Directive({
  selector: ':not(h4)',
})
export class MyDirective  {
    constructor(elm: ElementRef) { elm.nativeElement.style.color = 'green'; }
 }`;

  constructor() { }

  ngOnInit() {
  }

}
