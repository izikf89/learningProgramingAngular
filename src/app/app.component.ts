import { Component, HostListener, ElementRef, ViewChild, ViewContainerRef, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ButtonNavigateService } from './core/button-navigate.service';
import { MatSidenav } from '@angular/material';
import { InfoService } from './core/info.service';
import { PageListService } from './core/page-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string;
  btnBackName: string;
  btnBackLink: string;
  btnNextName: string; 
  btnNextLink: string;
  smallScreen: boolean = false;
  paths: Array<object>;
  @ViewChild('sidenav') sidenav:MatSidenav;
  
  constructor(private navigationBtn: ButtonNavigateService, private router: Router, private info: InfoService, private pages: PageListService) { }
  
  @HostListener('window:resize') onResize() {
    this.smallScreen = this.info.isSmallScreen();
  }

  activeNavigationBtn() {
    this.navigationBtn.statusPage.subscribe((val)=> {
      this.title = val['title'];
      this.btnBackName = val['previousPage']['name'];
      this.btnBackLink = val['previousPage']['link'];
      this.btnNextName = val['nextPage']['name'];
      this.btnNextLink = val['nextPage']['link'];
    })
  }

  spyOfNavigation() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(typeof this.sidenav != 'undefined')
          this.sidenav.close();

        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');

        document.getElementById("btn-top").scrollIntoView();
        document.getElementsByTagName('title')[0].textContent =  'אנגולר - ' + this.title;
      }
    });
  }

  fixedSidenav() {
    let sidenav: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName('mat-drawer-backdrop')[0]
    if(sidenav)
      sidenav.style.position = 'fixed';  
  }
  
  ngOnInit() {
    this.paths = this.pages.allPages;
    this.onResize();
    this.navigationBtn.listenToRoute();
    this.activeNavigationBtn();
    this.spyOfNavigation();
  }
  
  ngAfterViewInit() {
    this.fixedSidenav();    
  }
}

