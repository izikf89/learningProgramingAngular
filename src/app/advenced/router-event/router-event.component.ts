import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-event',
  templateUrl: './router-event.component.html',
  styleUrls: ['./router-event.component.css']
})
export class RouterEventComponent implements OnInit {
  import: string = `import { Router, NavigationEnd } from '@angular/router';`;
  registers: string = `constructor(private router: Router) {}`;
  subscribe: string = 
`ngOnInit() {
  this.router.events.subscribe(event => {
    if(event instanceof NavigationEnd) {
       alert('navigation succeeded');
    }
  })`;
  import3: string = ``;
  import21: string = ``;
  import1: string = ``;



  constructor() { }

  ngOnInit() {
  }

}
