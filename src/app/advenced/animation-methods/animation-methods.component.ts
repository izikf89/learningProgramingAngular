import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, stagger, query, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-animation-methods',
  templateUrl: './animation-methods.component.html',
  styleUrls: ['./animation-methods.component.css'],
  animations: [
    trigger('keyframes',[
      transition(':enter', [       
        animate('3s', keyframes([ 
          style({transform: 'translateX(0%)'}), 
          style({transform: 'translateX(-500%)'}), 
          style({transform: 'translate(-500%, 100%)'}), 
          style({transform: 'translateY(100%)'}), 
          style({transform: 'translateX(0%)'}) 
        ])),
      ])      
    ]),
    trigger('state',[
      state('A', style({background: 'green'})),
      state('B', style({background: 'red'})),
      transition('A=>B', [       
        animate('1s',  
          style({background: 'red'})
        )
      ]),      
      transition('B=>A', [       
        animate('1s',  
          style({background: 'green'})
        )
      ])      
    ]),
    trigger('stateOnly',[
      state('A', style({background: 'green'})),
      state('B', style({background: 'red'}))
    ]),
    trigger('group',[
      transition(':enter',[
        group([
            animate("1s", style({ background: "red" })),
            animate("3s", style({ transform: 'translateX(-300px)' }))
        ])   
      ])
    ]),
    trigger('query',[
      transition(':enter',
        query('h1', [
          animate("1s", style({ background: "red" })),
          animate("1s", style({ background: "blue" }))
          ]
        )   
      )
    ]),
    trigger('optional',[
      transition(':enter',[
        query(':enter', [
          animate("2s", style({ color: "blue" }))
          ], { optional: true}
        ),      
        //  query(':leave', [
        //   animate("1s", style({ color: "green" }))
        //   ], { optional: true}
        // ),   
        query(':animating', [
          animate("1s", style({ background: "red" }))
          ], { optional: true}
        ),
      ])
    ]),
    trigger('stagger', [
      transition('* => *', [ 
        query(':enter', [
            style({ opacity: 0 }),
            stagger(1000, [animate('0.5s', style({ opacity: 1 }))])
          ], { optional: true }
        )
      ])
    ])
  ]
})
export class AnimationMethodsComponent implements OnInit {

  keyframes: string = `keyframes([ style({}), style({}) ])`;
  keyframesComplate: string = 
`import { Component } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: '<button *ngIf="show" [@keyframes]>דוגמא</button>',
  animations: [
    trigger('keyframes',[
      transition(':enter', [       
        animate('3s', keyframes([ 
          style({transform: 'translateX(0%)'}), 
          style({transform: 'translateX(500%)'}), 
          style({transform: 'translate(500%, 100%)'}), 
          style({transform: 'translateY(100%)'}), 
          style({transform: 'translateX(0%)'}) 
        ])),
      ])      
    ])
  ]
})
export class AppComponent  {
  show: boolean = true;
  
  ngOnInit() {
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      }, 0);
    } ,3000);
  }
}`;
  state: string = 
`import { Component } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: '<button [@state]="value" >דוגמא</button> value = {{ value }}',
  animations: [
    trigger('state',[
      state('A', style({background: 'green'})),
      state('B', style({background: 'red'})),
      transition('A=>B', [       
        animate('1s',  
          style({background: 'red'})
        )
      ]),      
      transition('B=>A', [       
        animate('1s',  
          style({background: 'green'})
        )
      ])      
    ])
  ]
})
export class AppComponent  {
  value: string = 'A';
  
  ngOnInit() {
    setInterval(()=> {
      this.value = this.value == 'A' ? 'B' : 'A';
    }, 2000);
  }
}`;
  stateOnly: string = 
`trigger('state',[
  state('A', style({background: 'green'})),
  state('B', style({background: 'red'}))
])`;
  group: string = 
`import { Component } from '@angular/core';
import { trigger, style, animate, transition, group } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: '<button *ngIf="show" [@group] >דוגמא</button>',
  animations: [
    trigger('group',[
      transition(':enter',[
        group([
            animate("1s", style({ background: "red" })),
            animate("3s", style({ transform: 'translateX(300px)' }))
        ])   
      ])
    ])
  ]
})
export class AppComponent  {
  show: boolean = true;
  
  ngOnInit() {
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      } ,1);
    } ,3000);
  }
}`;
  query: string = 
`import { Component } from '@angular/core';
import { trigger, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: \`
    <div *ngIf="show" [@query]>
      <h1>h1</h1>
      <h2>h2</h2>
    </div>\`,
  animations: [
    trigger('query',[
      transition(':enter',
        query('h1', [
          animate("1s", style({ background: "red" })),
          animate("1s", style({ background: "blue" }))
          ]
        )   
      )
    ])
  ]
})
export class AppComponent  {
  show: boolean = true;
  
  ngOnInit() {
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      }, 0);
    }, 2000);
  }
}`;
  optional: string = `{ optional: true }`;
  complateOptional: string = `query( 'h1', animate(), { optional: true } )`;
  limit: string = `{ limit: 1 }`;
  complateLimit: string = `query( 'h1', animate(), { limit: 1 } )`;
  stagger: string = 
`import { Component } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: \`
    <div [@stagger] *ngIf='show'>
      <div *ngFor="let item of items">{{ item }}</div>
    </div>\`,
  animations: [
    trigger('stagger', [
      transition('* => *', [ 
        query(':enter', [
            style({ opacity: 0 }),
            stagger(1000, [animate('0.5s', style({ opacity: 1 }))])
          ], { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent  {
  items = [1,2,3,4]; 
  show = true;
  
  ngOnInit() {
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      }, 0);
    }, 4000);
  }
}`;
  eventsComplate: string =
`import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: \`
  {{ event }}
  <br> 
  <button *ngIf='show' [@trigger] (@trigger.start)="displayEvent('start')" (@trigger.done)="displayEvent('done')">דוגמא</button>
  \`,
  animations: [
    trigger('trigger',[
      transition(':enter',
        animate('1s',
          style({transform: 'translateX(300%)', opacity: '0'})
        )
      )
    ])
  ]
})
export class AppComponent  {
  show: boolean = true;
  event: string;

  displayEvent(value) {
    this.event = value;
  }

  ngOnInit() {
    setInterval(()=> {
      this.show = !this.show;
    } ,1000);
  }
}`;  

  constructor() { }

  show: boolean = true;
  show2: boolean = true;
  show3: boolean = true;
  value: string = 'A';
  items: Array<number> = [1,2,3];

  ngOnInit() {
    setInterval(()=> {
      this.show3 = !this.show3;
      setTimeout(()=> {
        this.show3 = !this.show3;
      }, 0);
    }, 3000);

    setInterval(()=> {
      this.value = this.value == 'A' ? 'B' : 'A';
    }, 2000);

    setInterval(()=> {
      this.show2 = !this.show2;
      setTimeout(()=> {
        this.show2 = !this.show2;
      }, 0);
    }, 2000);

    setInterval(()=> {
      this.show = !this.show;
    }, 2000);

  }
}


