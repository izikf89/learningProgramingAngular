import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styls',
  templateUrl: './styls.component.html',
  styleUrls: ['./styls.component.css']
})
export class StylsComponent implements OnInit {

  style: string = 
` @Component({
  selector: 'my-app',
  template:'<p>style</p>'
  styles:['p { color: red }']
})
export class AppComponent { }`;
  styleUrl: string = 
` @Component({
  selector: 'my-app',
  template:'<p>style</p>'
  styleUrls: ['./app.component.css']
})
export class AppComponent { }`;
  stylesChild: string = 
`import { Component } from '@angular/core';

@Component({
       selector: 'child-style',
       template:'<p>child</p>'
})
export class ChildStyle { }

@Component({
 selector: 'my-app',
       template: \`<p>parent</p>
       <child-style></child-style>\`,
       styles:['p { color: red }']
})
export class AppComponent { }`;
  host: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:'<p>hello world</p>',
  styles:[':host { color: red }']})
export class AppComponent  {}`;
  hostElment: string = `:host input { color: red }`;
  deep: string = `::ng-deep p {color: red}`;
  deepComplate: string = 
`import { Component } from '@angular/core';

@Component({
    selector: 'child',
    template:'<p>child</p>',
})
export class ChildStyle { }

@Component({
    selector: 'my-app',
    template: \`<p>parent</p>
        <child class='className'></child>\`,
    styles:[\` ::ng-deep p {color: red} \`]
})
export class AppComponent {}`;
  st2ylesChild: string = ``;
  s1tylesChild: string = ``;

  constructor() { }

  ngOnInit() {
  }

}
