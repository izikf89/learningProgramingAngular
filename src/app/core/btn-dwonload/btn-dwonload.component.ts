import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-dwonload',
  templateUrl: './btn-dwonload.component.html',
  styleUrls: ['./btn-dwonload.component.css']
})
export class BtnDwonloadComponent {

  @Input('href') href;
}
