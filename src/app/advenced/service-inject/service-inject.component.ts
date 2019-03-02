import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-inject',
  templateUrl: './service-inject.component.html',
  styleUrls: ['./service-inject.component.css']
})
export class ServiceInjectComponent implements OnInit {
  Injectable: string = 
`import { Component } from '@angular/core';

export class MyClass  { text; }; 

@Component({
    selector: 'child', 
    template: '<h1>chilt text: {{ text }}</h1>',
}) export class ChildComponent {
    text;

    constructor(myClass: MyClass) {
      this.text = myClass.text;
    }
}

@Component({
    selector: 'my-app', 
    template: \`<child></child>\`,
}) export class AppComponent {
    constructor(myClass: MyClass) {
      myClass.text = "parent change that!";      
    }
}`;
  injectConstructor: string = `constructor(service: MyService) {}`;
  importInjector: string = `import { Injector } from '@angular/core';`;
  constructorInjector: string = `constructor(private injector: Injector) {}`;
  Injector: string = `let newService = this.injector.get(ServiceInjectorS);`;
  injectorComplate: string = 
`import { Component, Injectable, Injector } from '@angular/core';

@Injectable()
export class ServiceInjectorS {
    message = 'i injector';
}

@Component({
    selector: 'my-app', 
    template: '<h1>{{ text }}</h1>',
}) export class AppComponent {
    text;

    constructor(private injector: Injector) {}

    ngOnInit() {
        let newService = this.injector.get(ServiceInjectorS);
        this.text = newService.message;
    } 
}`;
  injectorStringComplate: string = 
`import { Component, Injector } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>{{ text }}</h1>',
  providers: [ { provide: 'service', useValue: 'I service'}]
})
export class AppComponent  {
  text;
  constructor(private injector: Injector) {}

  ngOnInit() {
      let service = this.injector.get('service');
      this.text = service;
  } 
}
`;
  importInject: string = `import { Injector } from '@angular/core'`;
  injectComplate: string = 
`import { Component, Inject } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`<h1>{{ text }}</h1>\`,
  providers: [{ provide: 'string', useValue: 'I service'}]
})
export class AppComponent  {
  text;
  constructor(@Inject('string') private service) { }

  ngOnInit() {
    this.text = this.service;
  }
}`;
  injectorCreate: string = 'const injector = Injector.create({providers: [{provide: MyClass, deps:[]}]});';
  InjectorGetService: string = 'const service = injector.get(MyClass);';
  injectorCreateComplate = 
`import { Component, Injector } from '@angular/core';

class MyClass { text = 'I class' }

const injector = Injector.create({providers: [{provide: MyClass, deps:[]}]});
const service = injector.get(MyClass);

alert(service.text);`;
  importInjectionToken: string = `import { InjectionToken } from '@angular/core'`;
  InjectionToken: string = `const token = new InjectionToken('');`;
  InjectionTokenComplate: string = 
`import { Component, Inject, InjectionToken } from '@angular/core';

const token = new InjectionToken('');

@Component({
  selector: 'my-app', 
  template: \`<h1>{{ text }}</h1>\`,
  providers: [{ provide: token, useValue: 'I service' }]
}) export class AppComponent {
  text;
  constructor(@Inject(token) private service) { }

  ngOnInit() {
    this.text = this.service;
  }
}`;
  importOptional: string = `import { Optional } from '@angular/core`;
  optional: string = `constructor(@Optional() service: Service) { }`;
  optionalComplate: string = 
`import { Component, Injectable, Optional } from '@angular/core';

@Injectable()
export class Service { }

@Component({
    selector: 'my-app', 
    template: '<h1> if you see me so app not break</h1>',
}) export class AppComponent {
    constructor(@Optional() service: Service) { }
}`;
  importSkipSelf: string = `import { SkipSelf } from '@angular/core`;
  SkipSelf: string = `constructor(@SkipSelf() @Optional() service: Service) { }`;
  SkipSelfComplate: string = 
`import { Component, Injectable, SkipSelf, Optional } from '@angular/core';

@Injectable()
export class Service {
  text = 'i service'
  }

@Component({
  selector: 'my-app', 
  template: \`<child></child>\`,
}) export class AppComponent { }

@Component({
  selector: 'child', 
  template: '<h1>{{ text }}</h1>',  
  providers: [ Service ]  
}) export class Child {
  text;
  constructor( @SkipSelf() @Optional() service: Service) { 
    this.text = (service === null);
  }
}`;
  importSelf: string = `import { Self } from '@angular/core`;
  Self: string = `constructor(@Self() @Optional() service: Service) { }`;
  SelfComplate: string = 
`import { Component, Injectable, Self, Optional } from '@angular/core';

@Injectable()
export class Service {}

@Component({
  selector: 'my-app', 
  template: \`<child></child>\`,
  providers: [ Service ]
}) export class AppComponent { }

@Component({
  selector: 'child', 
  template: '<h1>{{ text }}</h1>',    
}) export class Child {
  text;
  constructor( @Self() @Optional() service: Service) { 
    this.text = (service === null);
  }
}
`;
  importHost: string = `import { Host } from '@angular/core`;
  Host: string = `constructor(@Host() @Optional() service: Service) { }`;
  HostComplate: string = 
`import { Component, Injectable, Host, Optional } from '@angular/core';

@Injectable()
export class Service {}

@Component({
  selector: 'my-app', 
  template: \`<child></child>\`,
  providers: [ Service ]
}) export class AppComponent { }

@Component({
  selector: 'child', 
  template: '<h1>{{ text }}</h1>',    
}) export class Child {
  text;
  constructor( @Host() @Optional() service: Service) { 
    this.text = (service === null);
  }
}
`;
  i11njectorStringComplate: string = ``;
  i11nject2orStringComplate: string = ``;
  i11njec1torStringComplate: string = ``;

  constructor() { }

  ngOnInit() {
  }

}
