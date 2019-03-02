import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PageListService } from './page-list.service';
import { AppComponent } from '../app.component';
import { Observable ,  Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ButtonNavigateService {
  page: Subject<object> = new Subject<object>();
  statusPage: Observable<object>;

  constructor(private router: Router, private pageList: PageListService) { 
    this.statusPage = this.page.asObservable();
    this.listenToRoute();
  }

  listenToRoute() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
         this.changeBtn();
      }
    })
  }

  changeBtn() {
    var currentUrl = this.router.routerState.snapshot.url;
    var index: number;
    var previousPage: object;
    var nextPage: object;
    var title: object;

    this.pageList.allPages.map(function(row, i) {
      if('/' + row['link'] == currentUrl)
          index = i;
    });

    if(index != null)
      title =  this.pageList.allPages[index ]['name'];

    if(index == 0 || index == null) {
      previousPage = {name: null};
    } else {
      previousPage = this.pageList.allPages[index - 1];
    }

    if(index == this.pageList.allPages.length - 1 || index == null) {
      nextPage = {name: null};
    } else {
      nextPage = this.pageList.allPages[++index];
    }

    this.page.next({title : title, previousPage, nextPage})
  }
}
