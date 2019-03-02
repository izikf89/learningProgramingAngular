import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-children',
  templateUrl: './get-children.component.html',
  styleUrls: ['./get-children.component.css']
})
export class GetChildrenComponent implements OnInit {

  childInComponent: string = 
`import { Component } from '@angular/core';

@Component({ selector:'child-app', template:'' })
export class ChildApp { }

@Component({
  selector: 'my-app',
  template: \`<child-app></child-app>\`
})
export class AppComponent  { }`;
  childOutComponent: string = 
`import { Component } from '@angular/core';

@Component({ selector:'child-app', template:''})
export class ChildComponent { }

@Component({ selector:'parent-app', template:''})
export class ParentComponent { }

@Component({
  selector: 'my-app',
 template: \`
  <parent-app>
     <child-app></child-app> 
  </parent-app>\`
})
export class AppComponent  {}`;
  importViewChild: string = `import { ViewChild } from '@angular/core';`;
  ViewChild: string = `@ViewChild (ChildName) propertyName;`;
  ViewChildComplate: string = 
`import { Component, ViewChild } from '@angular/core';

@Component({ selector:'child-app', template:'' })
export class ChildComponent {  name = 'i am child'; }

@Component({
  selector: 'my-app',
  template: \`<child-app></child-app>  {{ childValue }}\`
})
export class AppComponent  {
  childValue;
  @ViewChild (ChildComponent) viewChild;
  
  ngOnInit() { 
    this.childValue = this.viewChild.name;
  }
}`;
  importContentChild: string = `import { ContentChild } from '@angular/core';`;
  ContentChild: string = `  @ContentChild (ChildComponent) contentChild;`;
  ContentChildComplate: string = 
`import { Component, ContentChild } from '@angular/core';

@Component({ selector:'child-app', template:''})
export class ChildComponent { name = 'i child' }

@Component({ selector:'parent-app', template:'{{ childValue }}'})
export class ParentComponent {
  childValue
  @ContentChild (ChildComponent) contentChild;

  ngOnInit() { 
    this.childValue = this.contentChild.name;
  }
}

@Component({
  selector: 'my-app',
 template: \`
  <parent-app>
     <child-app></child-app> 
  </parent-app>\`
})
export class AppComponent  {}`;

  hashtagComplate: string =
`import { Component, ViewChild } from '@angular/core';

@Component({ selector:'child-app', template:'' })
export class ChildComponent {  name = 'i am child'; }

@Component({
  selector: 'my-app',
  template: \`<child-app #hashtag ></child-app>  {{ childValue }}\`
})
export class AppComponent  {
  childValue;
  @ViewChild ('hashtag') viewChild;
  
  ngOnInit() { 
    this.childValue = this.viewChild.name;
  }
}`;

  constructor() { }

  ngOnInit() {
  }

}
