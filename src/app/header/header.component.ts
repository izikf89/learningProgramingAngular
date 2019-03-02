import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  largeScreen: boolean;
  
  @HostListener('window:resize') onResize() {
    this.largeScreen = window.innerWidth > 570;
  }

  ngOnInit() {
    this.onResize();
  }
 }
