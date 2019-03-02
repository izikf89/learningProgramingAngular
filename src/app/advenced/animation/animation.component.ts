import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, stagger, query, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('simple',[
      transition(':enter',
        animate('1s',
          style({transform: 'translateX(-300%)', opacity: '0'})
        )
      )
    ]),
    trigger('transtionsMulti',[
      transition(':enter',
        animate('1s',
          style({transform: 'translateX(-200%)', opacity: '1'})
        )
      ),
      transition(':leave',
        animate('1s',
          style({transform: 'translateX(0%)', opacity: '0'})
        )
      )
    ]),
    trigger('transtionStyle',[
      transition(':enter', [
        style({background: 'blue'}),
        animate('3s',
          style({background: 'red'})
        )
      ])      
    ]),
    trigger('transtionAnimate',[
      transition(':enter', [
        animate('1500ms',style({background: 'red'})),
        animate('1500ms',style({background: 'blue'}))
      ])      
    ]),
    trigger('delay',[
      transition(':enter',
        animate('1s 1s',
          style({transform: 'translateY(200%)'})
        )
      )
    ]),
    trigger('in',[
      transition(':enter', [
        style({transform: 'translateX(-800%)'}),       
        animate('3s  ease-in', style({transform: 'translateX(0%)'})),
      ])      
    ]),
    trigger('out',[
      transition(':enter', [
        style({transform: 'translateX(-800%)'}),       
        animate('3s  ease-out', style({transform: 'translateX(0%)'})),
      ])      
    ]),
    trigger('outIn',[
      transition(':enter', [
        style({transform: 'translateX(-800%)'}),       
        animate('3s  ease-in-out', style({transform: 'translateX(0%)'})),
      ])      
    ]),
    trigger('noEase',[
      transition(':enter', [
        style({transform: 'translateX(-800%)'}),       
        animate('3s', style({transform: 'translateX(0%)'})),
      ])      
    ]), 
  ]
})
export class AnimationComponent implements OnInit {

  importAnimation: string = `import { BrowserAnimationsModule } from '@angular/platform-browser/animations';`;
  property: string = 
`@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [] 
})
export class AppComponent  {}`;
  importClasses :string = `import { trigger, state, style, animate, transition, stagger, query, keyframes } from '@angular/animations';`;
  trigger: string = `<h1 [@triggerName]>animation</h1>`;
  style: string = `style({ color: 'red', transform: 'translateY(200%)' })`;
  animateComplate: string = 
`import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: '<button *ngIf='show' [@simple]>דוגמא</button>',
  animations: [
    trigger('simple',[
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
  
  ngOnInit() {
    setInterval(()=> {
      this.show = !this.show;
    } ,1000);
  }
}`;
  ease: string = `animate('1000ms ease-in', style())`;
  valueInTrigger: string = `<h1 [@trigger]='value' >דוגמא</h1>`;
  valueInTriggerComplate: string = 
`import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'my-app',
  template: \`<button [@simple]='value' >דוגמא</button>\`,
  animations: [
    trigger('simple',[
      transition('A <=> B',
        [
          style({transform: 'translateX(0%)', opacity: '1'}),
          animate('1s',
            style({transform: 'translateX(300%)', opacity: '0'})
          )
        ]
      )
    ])
  ]
})
export class AppComponent  {
  value = "A";
  
  ngOnInit() {
    setInterval(()=> {
      this.value = this.value == "A" ? "B" : "A";
    }, 2000);
  }
}`;

  show: boolean = true;
  showLaeve: boolean = true;
  show2: boolean = true;
  show3: boolean = true;
  
  constructor() { }
  
  ngOnInit() {
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      } ,0);
    } ,1100);
    setInterval(()=> {
      this.show2 = !this.show2;
      setTimeout(()=> {
        this.show2 = !this.show2;
      } ,0);
    } ,2100);
    setInterval(()=> {
      this.show3 = !this.show3;
      setTimeout(()=> {
        this.show3 = !this.show3;
      } ,0);
    } ,3100);
    setInterval(()=> {
      this.showLaeve = !this.showLaeve;
    } ,2000);
  }
}
