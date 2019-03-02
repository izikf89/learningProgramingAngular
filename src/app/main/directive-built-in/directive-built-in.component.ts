import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-built-in',
  templateUrl: './directive-built-in.component.html',
  styleUrls: ['./directive-built-in.component.css']
})
export class DirectiveBuiltInComponent implements OnInit {

  ngForExample1: string = 'array = [1,2,3];';
  ngForExample2: string = '<ul><li *ngFor="let x of array">{{ x }}</li></ul>';
  indexExample: string = '<ul><li *ngFor= "let x of array; index as i;">[{{ i }}] / {{ x }} </li></ul>'
  ngIfExample: string = '<h1 *ngIf="1 < 2" >tag 1</h1> <h1 *ngIf="false" >tag 2</h1>';
  ngIfElseExample: string = 
    `<p *ngIf= "false; else tamplateName;" >ng-if</p>
    <ng-template #tamplateName>else</ng-template>`;
  ngIfThenExample: string = 
    `<p *ngIf= "true; then tamplateName;" >ng-if</p>
    <ng-template #tamplateName>then</ng-template>`;

  cardNgfor: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<ul><li *ngFor="let x of array">{{ x }}</li></ul>',
})
export class AppComponent  {
  array = [1,2,3];
}`;

  cardNgforIndex: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<ul><li *ngFor= "let x of array; index as i;">[{{i}}] /{{x}}</li></ul>',
})
export class AppComponent  {
  array = [1,2,3];
}`;

  cardNgIf: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  \`<h1 *ngIf="1 < 2" >tag 1</h1> 
  <h1 *ngIf="false" >tag 2</h1>
  <h1 *ngIf="property" >property</h1>
  <h1 *ngIf="nullValue" >null</h1>\`,
})
export class AppComponent  {
  property = true;
  nullValue = null;
 }
`;

  cardNgIfElse: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  \`<p *ngIf= "false; else tamplateName;" >ng-if</p>
    <ng-template #tamplateName>else</ng-template>\`,
})
export class AppComponent { }`;

  cardNgIfThen: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  \`<p *ngIf= "true; then tamplateName;" >ng-if</p>
    <ng-template #tamplateName>then</ng-template>\`,
})
export class AppComponent {}
`;

ngClassExample: string = `<h1 [ngClass]="{ className: true }">ngClass</h1>`;

ngClassExampleComplate: string = `import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`<h1 [ngClass]="classCtrl">ng class</h1>\`,
  styles: [
    \`.classA {
        color:red
    }
    .classB {
        background: black
    }\`
  ]
})
export class AppComponent  {
  classCtrl = {
        'classA' : true,
        'classB' : true
    }
}
`;

ngStyleExample: string = `<h1 [ngStyle]="{color:'blue'}">ng style</h1>`;

ngStyleExampleComplate: string =
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`<h1 [ngStyle]="style">ng style</h1>\`,
})
export class AppComponent  {
  style = {color:'blue'}
 }`;

 ngSwitchExample: string = 
 `<div [ngSwitch]="1">
  <h1 *ngSwitchCase="1">1</h1>
  <h1 *ngSwitchCase="2">2</h1>
  <h1 *ngSwitchDefault>default</h1>    
</div>
`;
ngSwitchExampleComplate: string = 
 `import { Component } from '@angular/core';

 @Component({
   selector: 'my-app',
   template: 
     \`<div [ngSwitch]="1">
       <h1 *ngSwitchCase="1">1</h1>
       <h1 *ngSwitchCase="2">2</h1>
       <h1 *ngSwitchDefault>default</h1>    
     </div>\`,
 })
 export class AppComponent { }
 `;

constructor() { }

  ngOnInit() {
  }

}
