import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  example: string = '<h1 #hash >angular</h1> <h2>{{hash.innerHTML}}</h2>';
  hashtag: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1 #hash >angular</h1> <h2>{{hash.innerHTML}}</h2>',
})
export class AppComponent  {
  name = 'Angular 5';
}`;
  hashtagOfComponent: string = 
`import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: \`\`,
})
export class HelloComponent  {
  property = 'hello';
}

@Component({
  selector: 'my-app',
  template: \`
    <hello #helloHashtag ></hello>
    <h1>{{ helloHashtag.property }}</h1> \`,
})
export class AppComponent  { }
`;

  constructor() { }

  ngOnInit() {
  }

}
