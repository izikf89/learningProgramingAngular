import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { PageListService } from '../core/page-list.service';
import { UpdateListService } from '../core/update-list.service';
import { InfoService } from '../core/info.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {
  smallScreen:boolean;  
  list: Array<object> = this.pages.list; 
  currentColmun: string;    
  
  constructor(private pages: PageListService, private UpdateListService: UpdateListService , private router: Router, private info: InfoService) { }
  
  updateList() {       
    this.list = this.pages.list;     
  }

  ngOnInit() {
    this.updateList();
    this.listenToRoute();
  }

  listenToRoute() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        var currentUrl = this.UpdateListService.checkIfColumnChange(this.currentColmun);
        if(currentUrl) {
          this.currentColmun = currentUrl;
          this.updateList();
        }
      }
    })
  }
}
