import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './btn-exa.component.html',
  styleUrls: ['./btn-exa.component.css']
})
export class BtnExaComponent {
  @Input('href') href;
}
