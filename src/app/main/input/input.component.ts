import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  import: string = `import { FormsModule } from '@angular/forms';`;
  ngModel: string = `<input [(ngModel)]="myProperty">`;
  ngModelComplate: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    \`<input [(ngModel)]="myProperty"> 
    <h1>{{ myProperty }}</h1>\`,
})
export class AppComponent  {
  myProperty = 'this write in script';
}`;
  select: string = `<select [(ngModel)]="myProperty">`;
  selectComplate: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`
    <select [(ngModel)]="myProperty">
    <option *ngFor='let number of array'>{{ number }}</option>
    </select>    
    <h1>{{ myProperty }}</h1>\`
})
export class AppComponent  {
  array = [1, 2, 3];
}`;
  radio: string = '<input value="myValue" [(ngModel)]="myProperty" type="radio">';
  radioComplate: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    \`<input value="A" [(ngModel)]="myProperty" type="radio">
     <input value="B" [(ngModel)]="myProperty" type="radio"> 
    <h1>{{ myProperty }}</h1>\`,
})
export class AppComponent { 
  myProperty = "A";
}`;
  checkbox: string = '<input [(ngModel)]="myProperty" type="checkbox">';
  checkboxComplate: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    \`<input [(ngModel)]="myProperty" type="checkbox">
    <h1>{{ myProperty }}</h1>\`,
})
export class AppComponent {
  myProperty = true;
}`;
  ngValue: string = `<option *ngFor='let i of array' [ngValue]='i'>{{ i.key }}</option>`;
  ngValueComplate: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`
    <select [(ngModel)]="modelName">
    <option *ngFor='let item of array' [ngValue]='item'>{{ item.key1 }}</option>
    </select>    
    <h1>{{ modelName | json }}</h1>\`
})
export class AppComponent  {
  array = [{key1:"value1", key2:"value1"}, {key1:"value2", key2:"value2"}];
}`;
  ngmodelchangeOld: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    \`<input [(ngModel)]="myProperty" (ngModelChange)="onChange($event)"> 
    <h1>{{ newValue }}</h1>\`,
})
export class AppComponent  {
  newValue;

  onChange(value) {
    this.newValue =  value;
  }
}
`;
  ngmodelchangeNew: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    \`<input #localVar="ngModel" (ngModelChange)="onChange(localVar)" [(ngModel)]="myProperty"> 
    <h1>{{ oldVAlue }}</h1>\`,
})
export class AppComponent  {
  oldVAlue = '';

  onChange(NgModel) {
    this.oldVAlue = NgModel.value;
  }
}
`;
  validation: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`
    <input required [(ngModel)]="modelName" #hash=ngModel >
    <p *ngIf='hash.errors && hash.errors.required'>required</p> 
    <h1>{{ hash.valid }}</h1>
    <h1>{{ hash.touched	}}</h1>
    <h1>{{ hash.untouche }}</h1>
    <h1>{{ hash.dirty	}}</h1>
    <h1>{{ hash.pristine }}</h1>
    <h1>{{ hash.valid	}}</h1>
    <h1>{{ hash.invalid }}</h1>
    <h1>{{ hash.status }}</h1>\`
})
export class AppComponent  {}`;
validationClass: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    \`<input ngModel #hash>
    <h1>{{ hash.className }}\`,
  styles: [ '.ng-touched { background: red }' ]
})
export class AppComponent { }`;



  constructor() { }

  ngOnInit() {
  }

}
