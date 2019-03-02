import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent implements OnInit {
  functionValidation: string = 
`export function CustomValidation() {
  return (control) => {
    return 5 != control.value ? { customValidation: true } : null;
  };
}`
  reactive: string = 
`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export function CustomValidation() {
  return (control) => {
    return 5 != control.value ? { customValidation: true } : null;
  };
}

@Component({
  selector: 'my-app',
  template:\`
    <form [formGroup]='formName' >
        <input formControlName='inputName'>
    </form>                      
    <p> value: {{ formName.controls.inputName.errors | json }}</p>
    <p> valid: {{ formName.valid }}</p>\`
})
export class AppComponent {
  formName = new FormGroup({
    inputName: new FormControl(1, [
      CustomValidation(),
    ])
  }) 
}`;
  directive: string = 
`import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[CustomValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidatorDirective, multi: true}]
})
export class ValidatorDirective {
  validate(control) {    
    return control ? CustomValidation()(control) : null;
  }
}`;
  importNG_VALIDATORS: string = `import { NG_VALIDATORS } from '@angular/forms';`;
  providers: string = `providers: [{provide: NG_VALIDATORS, useExisting: ValidatorDirective, multi: true}]`;
  templateDriven: string = 
`import { Component, Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

export function CustomValidation() {
  return (control) => {
    return 5 != control.value ? { customValidation: true } : null;
  };
}

@Directive({
  selector: '[CustomValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidatorDirective, multi: true}]
})
export class ValidatorDirective {
  validate(control) {    
    return control ? CustomValidation()(control) : null;
  }
}

@Component({
  selector: 'my-app',
  template:
    \`<input CustomValidation [(ngModel)]="modelName" #hash=ngModel > 
    <br>
    customValidation: {{ hash.errors | json }}\`
})
export class AppComponent  { }`;
  functionValidation12: string = ``;
  functionValidation11: string = ``;

  constructor() { }

  ngOnInit() {
  }

}