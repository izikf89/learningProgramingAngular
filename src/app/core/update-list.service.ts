import { Injectable } from '@angular/core';
import { PageListService } from './page-list.service';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class UpdateListService {

  constructor(private router: Router , private pageList: PageListService) { }

  checkIfColumnChange(currentColmun) {
    var currentUrl = this.router.routerState.snapshot.url;
    currentUrl = currentUrl.slice(1, currentUrl.lastIndexOf('/') || currentUrl.length)
    if(currentUrl != currentColmun) {
      this.changeList(currentUrl);
      return currentUrl;
    }
    return null;
  }

  changeList(currentColmun) {
    switch(currentColmun) {
      case "basic":
      case "/basic/intro":
        this.pageList.list = this.pageList.basicList;
        break;
      case "main":
        this.pageList.list = this.pageList.mainList;
        break;
      case "advenced":
        this.pageList.list = this.pageList.advencedList;
        break;
    }
  }
}
