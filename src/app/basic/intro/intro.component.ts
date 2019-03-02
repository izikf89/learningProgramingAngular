import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('title')[0].textContent = 'ללמוד אנגולר בקלות'
  }

}
