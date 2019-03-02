import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.css']
})
export class FormDynamicComponent implements OnInit {
  import: string = `import { FormBuilder, Validators, FormArray } from '@angular/forms';`;
  fromGroup: string = `<form [formGroup]='formName'>`;
  formArrayName: string = `<div formArrayName="controllerArray" >`;
  ngFor: string = `<div *ngFor="let item of formName.controls.controllerArray.controls; let i=index" [formGroupName]="i">`;
  input: string = `<input formControlName="controlerInputName1"><button (click)='removeInput(i)'>remove input</button>`;
  html: string = 
`<form [formGroup]='formName'>
  <div formArrayName="controllerArray" >
    <div *ngFor="let item of formName.controls.controllerArray.controls; let i=index" [formGroupName]="i">
      <input formControlName="controlerInputName1">
      <button (click)='removeInput(i)'>remove input</button>
    </div>
  </div>
</form>
<p> validation: {{ formName.status }}</p>
<button (click)='addInput()'>add input</button>\` `;
  Constructor: string = `constructor(private fb: FormBuilder) { }`;
  arrayInputs: string = `arrayInputs = [{controlerInputName1 : ['a',Validators.required]}, {controlerInputName1: 'b'}];`;
  formProperty: string = `formName = this.fb.group({ controllerArray: this.fb.array([]) })`;
  methodRow1: string = `const arrayFG = arrayInputs.map(address => this.fb.group(address));`;
  methodRow2: string = `const formArray = this.fb.array(arrayFG);`;
  methodRow3: string = `this.formName.setControl('controllerArray', formArray);`;
  method: string = 
`setArrayInputs(arrayInputs) {
  const arrayFG = arrayInputs.map(address => this.fb.group(address));
  const formArray = this.fb.array(arrayFG);
  this.formName.setControl('controllerArray', formArray);
}`;
  NgOnInit: string = `ngOnInit() { this.setArrayInputs(this.arrayInputs) }`;
  add: string = `addInput() {(this.formName.get('controllerArray') as FormArray).push(this.fb.group({controlerInputName1:''})) }`;
  remove: string = `removeInput(index) { this.formName.controls.controllerArray["controls"].splice(index,1) }`;
  complate: string = 
`import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  template:\`
    <form [formGroup]='formName'>
      <div formArrayName="controllerArray" >
        <div *ngFor="let item of formName.controls.controllerArray.controls; let i=index" [formGroupName]="i">
          <input formControlName="controlerInputName1">
          <button (click)='removeInput(i)'>remove input</button>
        </div>
      </div>
    </form>
    <p> validation: {{ formName.status }}</p>
    <button (click)='addInput()'>add input</button>\` 
})
export class AppComponent {
  arrayInputs = [{controlerInputName1 : ['a',Validators.required]}, {controlerInputName1: 'b'}];

  formName = this.fb.group({
    controllerArray: this.fb.array([])
  })  

  constructor(private fb: FormBuilder) { }

  setArrayInputs(arrayInputs) {
    const arrayFG = arrayInputs.map(address => this.fb.group(address));
    const formArray = this.fb.array(arrayFG);
    this.formName.setControl('controllerArray', formArray);
  }

  ngOnInit() { this.setArrayInputs(this.arrayInputs) }

  addInput() {(this.formName.get('controllerArray') as FormArray).push(this.fb.group({controlerInputName1:''})) }

  removeInput(index) { this.formName.controls.controllerArray["controls"].splice(index,1) }
}`;



  constructor() { }

  ngOnInit() {
  }

}
