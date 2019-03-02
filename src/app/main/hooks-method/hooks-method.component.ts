import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks-method',
  templateUrl: './hooks-method.component.html',
  styleUrls: ['./hooks-method.component.css']
})
export class HooksMethodComponent {
  ngOnchanges: string = 
`import { Component, Directive, Input, SimpleChanges } from '@angular/core';
@Component({
  selector: 'my-app',
  template: \`<button [directiveListen]='counter' (click)='fun()'>ng change</button>\`
})
export class AppComponent   {
  counter = 0;
  fun() { 
    this.counter++ 
  }
}

@Directive({
  selector: '[directiveListen]',
})
export class DirectiveListen {
  @Input () directiveListen;
  ngOnChanges(chg: SimpleChanges) {
    alert('i listen');  
  }
}
`;
  simpleChangesImport: string = `import { SimpleChanges } from '@angular/core';`;
  simplechanges: string = 
`ngOnChanges(chg) {
  alert(
    'currentValue: '    + chg.directiveListen.currentValue + 
    'firstChange: '    + chg.directiveListen.firstChange + 
    'previousValue: ' + chg.directiveListen.previousValue
  );
}`;
ngOnInint: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>ngOnInit</h1>',
})
export class AppComponent  {
  ngOnInit() {
    alert('i ngOnInit!');
  }
}
`;
ngOnchangesRefernce: string = 
`import { Component, Directive, Input } from '@angular/core';
@Component({
  selector: 'my-app',
  template: \`<button [directiveListen]='obj' (click)='fun()'>ng change</button>\`
})
export class AppComponent   {
  obj = { counter: 0};
  fun() { 
    this.obj.counter++ 
  }
}

@Directive({
  selector: '[directiveListen]',
})
export class DirectiveListen {
  @Input () directiveListen;
  ngOnChanges(chg) {
    alert('currentValue: '    + chg.directiveListen.currentValue + 
      '\\r\\n firstChange: '    + chg.directiveListen.firstChange + 
      '\\r\\n previousValue: ' + chg.directiveListen.previousValue
    );
  }
}`;
  ngDoCheck: string = 
`import { Component, Directive, Input } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<button directiveListen (click)="fun()">ng change</button>'
})
export class AppComponent   {
  counter = 0;
  fun() { 
    this.counter++ 
  }
}

@Directive({
  selector: '[directiveListen]',
})
export class DirectiveListen {
  ngDoCheck() {
    alert('ngDoCheck listen');
  }
}`;
  ngAfterContentInit: string = 
``;
  ngAfterContentChecked: string = 
``;
  ngAfterViewInit: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<child-app></child-app>'
})
  export class AppComponent {
  ngOnInit() { alert('parent - ngOnInit') }
  ngAfterViewInit() { alert('parent - ngAfterViewInit') }
}

@Component({
  selector:'child-app',
  template: '<p>child</p>'
})
export class ChildApp {
  ngOnInit() { alert('child - ngOnInit') }
}`;
  ngAfterViewChecked: string = 
`import { Component, ViewChild } from '@angular/core';

@Component({
  selector:'child-app',
  template: '<button (click)='fun()'>child</button>'
})
export class ChildApp {
  counter = 0;
  fun() { 
    this.counter++; 
  }
}

@Component({
  selector: 'my-app',
  template: '<child-app></child-app>'
})
export class AppComponent {
  ngAfterViewChecked() {
    alert('ngAfterViewChecked listen!')
  }
}`;
  ngOnDestroy: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`
    <p *ngIf="a; else tamplateName;then tamplateThen">ng-if</p>
     <ng-template #tamplateName><h2>destroy</h2></ng-template>
     <ng-template #tamplateThen><w>d</w></ng-template>
    \`,
  styles: ['h2{ color: red }']
})
export class AppComponent  {
  a = true;
  ngOnInit() { 
    setTimeout(()=> { this.a = false;}, 3000);
  }
}

@Component({
  selector: 'w',
  template: '<h1 >create</h1>',
  styles: ['h1{ color: green}']
})
export class DestroyComponent  {
  a = true;
  ngOnDestroy() {alert('ngOnDestroy play!')}
}`;

}
