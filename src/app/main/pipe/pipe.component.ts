import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  pipeSyntex: string = `{{ data | pipeName }}`;
  parameter: string = `{{ data | pipeName:parameter }}`;
  severalPipe: string = '{{ data | pipe1 | pipe2 }}';
  pipeToDownCase: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1> {{ chars | lowercase }} </h1>',
})
export class AppComponent  {
  chars = 'ABC';
}`;
  importPipe: string = `from { Pipe } from '@angular/core'`;
  pipeName: string = `@Pipe({name: 'pipeName'})`;
  pipeCustom: string = 
`import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1> {{ chars | myPipe }} </h1>',
})
export class AppComponent  {
  chars = 1;
}

@Pipe({ name: 'myPipe' })
export class MyPipe {
  transform(value) {
    value++;
    return value * 2; 
  }
}`;
  ngFor: string = `<h1 *ngFor="let x of (array | myPipe)">{{ x }}</h1>`;
  ngForComplate: string = 
`import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1 *ngFor="let x of (array | myPipe)">{{ x }}</h1>',
})
export class AppComponent  {
  array=[1,2,3]
}

@Pipe({ name: 'myPipe' })
export class MyPipe {
  transform(value) {
    for(let i = 0; i < value.lengeth; i++) {
      value++;
      value * 2;
    } 
    return value;
  }
}`;
  binding: string = 
`import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'my-app',
  template:\`<h1> {{ value | myPipe }}</h1>
    <button (click)='fun()'>change data</button>\`
})
export class AppComponent {
  value = 1;
  fun() { this.value++; }
}

@Pipe({name: 'myPipe'})
export class MyPipe   {
  transform(item){        
    return item  * 2;
  }    
}`;
  pure: string = `@Pipe({ name: 'pipeName', pure: false })`;
  pureComplate: string = 
`import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
    \`<h1>pure: {{ Object | purePipe }}</h1>
     <h1>impure: {{ Object | impurePipe }}</h1>
     <button (click)='fun()'>change data</button>\`
})
export class AppComponent {
  Object = {value: 1};
  fun() { this.Object.value++; }
}

@Pipe({name: 'purePipe'})
export class Pure   {
  transform(item){        
    return item.value  * 2;
  }    
}

@Pipe({
  name: 'impurePipe',
  pure: false
  })
export class Impure   {
  transform(item){        
    return item.value   * 2;
  }    
}`;


  constructor() { }

  ngOnInit() {
  }

}
