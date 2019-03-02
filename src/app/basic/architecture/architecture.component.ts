import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.css']
})
export class ArchitectureComponent {
  decoratedExample: string = 
`@injectable()
export class MyService {}`;
}
