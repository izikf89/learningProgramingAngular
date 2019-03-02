import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  propertiesExample: string = `<h1 [style.background]="'red'">properties</h1>`;

  propertiesExampleComplate: string = 
  `import { Component } from '@angular/core';

  @Component({
    selector: 'my-app',
    template: \`<h1 [style.background]="'red'">properties</h1>\`,
  })
  export class AppComponent  { }`;


  objectExample: string = 'var object = {property: "value"};'
  constructor() { }

  ngOnInit() {
  }

}
