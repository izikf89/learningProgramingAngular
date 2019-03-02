import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-element',
  templateUrl: './angular-element.component.html',
  styleUrls: ['./angular-element.component.css']
})
export class AngularElementComponent implements OnInit {

  import: string = `import { createCustomElement } from '@angular/elements';`;
  importInjector: string = `import { Injector } from '@angular/core';`;
  importCreateCustomElement: string = `import { createCustomElement } from '@angular/elements';`;
  constructorExample: string = `constructor(private injector: Injector) {}`;
  createCustomElement: string = `const newElement = createCustomElement(MyComponent, {injector: this.injector});`;
  customElements: string = `customElements.define('new-element', newElement);`;
  complateExample: string = 
`import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'new-element',
  template: '<h1>new Element</h1>',
})
export class NewElement {}

@Component({
  selector: 'app-root',
  template: ''
})
export class AppComponent {
  constructor(private injector: Injector) {}

  ngOnInit() {
    const newElement = createCustomElement(NewElement, {injector: this.injector});
    customElements.define('new-element', newElement);

    const newEl = document.createElement('new-element');
    document.body.appendChild(newEl);
  }
}`;

  constructor() { }

  ngOnInit() {
  }

}
