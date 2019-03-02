import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent {
  module: string = `import { HttpClientModule } from '@angular/common/http';`;
  import: string = `import { HttpClient } from '@angular/common/http';`;
  Constructor: string = `constructor( private http: HttpClient ) { }`;
  subscribe: string = `this.http.get('url').subscribe();`;
  response: string = 
`this.http.get('url').subscribe(
  res => { console.log(res); },
  err => { console.log(err); }
);`;
  Get: string = `this.http.get('url').subscribe();`;
  GetParameter: string = `this.http.get('url', {key: value}).subscribe();`;
  post: string = `this.http.post('url').subscribe();`;
  postParameter: string = `this.http.post('url', {params: {key: value}}).subscribe();`;
  postBody: string = `this.http.post('url', {key: vlaueBody}, {params: {key: value}}).subscribe();`;
  header: string = `this.http.post('url', { params: {key: value}, headers: {'nameHeader': 'value'} }).subscribe();`;
  retry: string = `http.get('url').retry(3).subscribe()`;
  headerResponse: string = 
`this.http.get('url', {observe: 'response'}).subscribe(
  res => { 
    console.log(res.header.get('contact-type')) 
});`;
}
