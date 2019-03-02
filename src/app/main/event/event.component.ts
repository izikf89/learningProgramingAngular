import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  htmlEvent: string =
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1 (click)="myMethod($event)">click me</h1>',
})
export class AppComponent  {
  myMethod(e) {alert(e)}
}`;
  hostListener: string = `@HostListener("eventName", ['$event'] ) myMethod(event){ console.log(event); }`;
  hostListenerShort: string = `@HostListener("click" ) myMethod() { alert(); }`;
  hostListenerComplate: string = 
`import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>click me</h1>',
})
export class AppComponent  {
  @HostListener("click", ['$event'] ) myMethod(e){ 
    alert(e);
  }
}`;
  hostListnerShort: string = `@HostListener("click") myMethod() { alert(); }`;
  host1: string = `host: {'(eventName)': 'myMethod($event)'}`;
  host2: string = `myMethod(e) { alert(e) }`;
  hostComplate: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>host</h1>',
  host: {'(click)': 'myMethod($event)'}
})
export class AppComponent  {
  myMethod(e) { alert(e) }
}`;

  enter: string =
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<input (keyup.enter)="myMethod($event)" value="press enter here">',
})           
export class AppComponent  {
  myMethod(e) { alert(e) }
}`;
importOutputDecorated: string = `import { Component, Output, EventEmitter } from '@angular/core';`;
releaseEvent: string = `ngOnInit() { this.eventName.emit("my first event!"); }`;
outputDecoratedComplate: string = 
`import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1> create event by decorated</h1> ',
})
  export class AppComponent  {
  @HostListener("myEvent", ['$event'] ) myMethod(e){ 
    alert(e);
  }

  @Output() myEvent =  new EventEmitter(); 

  ngOnInit() {
    this.myEvent.emit("my first event!");  
  }
}`;

importOutputProperty: string = `import { Component, EventEmitter, HostListener } from '@angular/core';`;
outputPropertyComplate: string = 
`import { Component, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>event - property</h1>',
  outputs: ['eventName'],  
})
export class AppComponent  {
  eventName = new EventEmitter();  

  ngOnInit(){
    this.eventName.emit('hello world');
  }

  @HostListener('eventName', ['$event'] ) myMethod(e){ 
    alert(e);
  }  
}`;

constructor() { }

  ngOnInit() {
  }

}
