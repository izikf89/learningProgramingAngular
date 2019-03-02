import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ngForm: string = `<form #ctrl='ngForm'>`;
  tdInput: string = `<input ngModel name='inputName' required>`;
  tdValue: string = `{{ ctrl.value.inputName }}`;
  tdValidation: string = `{{ ctrl.valid }}`;
  tdComplate: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    \`<form #ctrl='ngForm'>
        <input ngModel name='inputName' required>
    </form>
    <p> value: {{ ctrl.value.inputName }} </p>
    <p> valid: {{ ctrl.valid }} </p>\`
})
export class AppComponent { }`;
  importReactive: string = `import { FormControl, FormGroup, Validators } from '@angular/forms';`;
  reactiveForm: string = `<form [formGroup]='formName' ></form>`;
  reactiveInput: string = `<input formControlName='inputName'>`;
  reactiveFormGroup: string = `formName = new FormGroup({})`;
  reactiveFormControl: string = `formName = new FormGroup({inputName: new FormControl("",[])})`;
  arrayFormControl: string = `FormControl("default value", [Validators.required])`;
  reactive: string = 
`import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  template:\`
    <form [formGroup]='formName' >
        <input formControlName='inputName'>
    </form>                      
    <p> value: {{ formName.value.inputName }}</p>
    <p> valid: {{ formName.valid }}</p>\`
})
export class AppComponent  {
  formName = new FormGroup({
    inputName: new FormControl("default value", [
      Validators.required,
      Validators.maxLength(15)
    ])
  })  
}`;
  importFormBuilder: string = `import { FormBuilder, Validators } from '@angular/forms';`;
  FormBuilderConstructor: string = `constructor(private fb: FormBuilder) { }`;
  FormBuilderGroup: string = `formName = this.fb.group({});`;
  FormBuilderProperty: string = `formName = this.fb.group({inputName: value});`;
  FormBuilderCmplate: string = `formName = this.fb.group({inputName: ['default value', Validators.required]});`;
  reactiveFormBuilder: string = 
`import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  template:\`
    <form [formGroup]='formName' >
        <input formControlName='inputName'>
    </form>                      
    <p> value: {{ formName.value.inputName }}</p>
    <p> valid: {{ formName.valid }}</p>\`
})
export class AppComponent {

  constructor(private fb: FormBuilder) { }

  formName = this.fb.group({
    inputName: ['default value', Validators.required]
  });
}`;
  submitSimple: string = `<form #ctrl='ngForm' (submit)='fun()'>`;
  submitDisabled: string = `<input type='submit' [disabled]='!ctrl.valid'>`;
  submit: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
    \`<form #ctrl='ngForm' (submit)='fun()'>
        <input ngModel name='inputName' required>
        <input type='submit' [disabled]='!ctrl.valid'  >
    </form>
    <p> value: {{ ctrl.value.inputName }} </p>
    <p> valid: {{ ctrl.valid }} </p>\`
})
export class AppComponent {
  fun() { alert('i submit'); }
 }`;
  nestedHtml: string = 
`<form [formGroup]='formName' >
  <input formControlName='inputName'>
  <div formGroupName='nestedFromName' >
    <input formControlName='nstedInputName'>
  </div>                
</form>                      `;
  nested: string = 
`@Component({
  selector: 'my-app',
  template:
  \`<form [formGroup]='formName' >
      <input formControlName='inputName'>
      <div formGroupName='nestedFromName' >
        <input formControlName='nstedInputName'>
      </div>                
    </form>                      
    <p> value: {{ formName.value.inputName }}</p>         
    <p> nested value: {{ formName.value.nestedFromName.nstedInputName }}</p>\`
})
export class AppComponent {

  constructor(private fb: FormBuilder) { }

  formName = new FormGroup({
    inputName: new FormControl("default value", [
      Validators.required,
      Validators.maxLength(15)
    ]),
     nestedFromName:  new FormGroup({
      nstedInputName: new FormControl('default value',[]
      )
     })
  })  
}`;
  nestedHtml3: string = ``;
  constructor() { }

  ngOnInit() {
  }
}
