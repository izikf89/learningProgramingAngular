import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit {
  ngContent: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`
    <b>
      <c></c>  
    </b>
  \`
})
export class AppComponent {}

@Component({
  selector: 'b',
  template: \`
  <h1>before</h1>
  <ng-content></ng-content>
  <h1>after</h1>
  \`,
})
export class B {}

@Component({
  selector: 'c',
  template: '<h1>content</h1>',
  
})
export class C {}
`;
  muchChild: string = 
`
<b>
  <c></c>  
  <c></c>  
  <c></c>  
</b>
`;
  multiChild: string = `<ng-content select=childName></ng-content>`;
  multiChildComplate: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`
    <content>
      <a></a>
      <b></b>    
    </content>
  \`
})
export class AppComponent {}

@Component({
  selector: 'content',
  template: \`
  <ng-content select=b></ng-content>
  <ng-content select=a></ng-content>
  \`,
})
export class Content {}

@Component({
  selector: 'a',
  template: '<h1>A</h1>',
  
})
export class A {}


@Component({
  selector: 'b',
  template: '<h1>B</h1>',
  
})
export class B {}`;
  ngC4ontent: string = ``;
  ng3Content: string = ``;
  n2gContent: string = ``;
  constructor() { }

  ngOnInit() {
  }

}
