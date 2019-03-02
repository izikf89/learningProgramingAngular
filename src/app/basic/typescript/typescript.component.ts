import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {
  arrayExample: string = `myArray: Array<object> = [{key: 'value'}, {key: 'value'}];`
  class: string = 
`class MyClass {
  property = 1;
  method () {
    document.getElementById('app').innerText = this.property + '';
   }
}

let myClass = new MyClass();
myClass.method()`;
import: string = 
`import { myObject } from './script';

document.getElementById('app').innerHTML = myObject + '';`;
  observable: string = 
`import { Subject } from 'rxjs/Subject';

class ObservableExample  {
  myHtml = 0;

  myVar;
  myObservable = new Subject();

  method() {
    this.myVar = this.myObservable.asObservable();

    setInterval(()=>this.myObservable.next(1), 1000);
    
    this.myVar.subscribe((val)=> {
      this.myHtml += val;
      document.getElementById('app').innerHTML = this.myHtml.toString();
    })
  }
}

let myClass = new ObservableExample();
myClass.method();`;

  constructor() { }

  ngOnInit() {
  }

}
