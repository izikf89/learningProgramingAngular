import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-complate-example',
  templateUrl: './complate-example.component.html',
  styleUrls: ['./complate-example.component.css']
})
export class ComplateExampleComponent implements OnInit {
  @Input() example;
  // @Input('href') href;
  @Input('download') download;
  @Input('card') card;

  constructor() { }

  ngOnInit() {
  }

}
