import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule, MatButtonModule, MatCardModule } from '@angular/material';

import { PageListService } from './page-list.service';
import { UpdateListService } from './update-list.service';
import { NavListComponent } from '../nav-list/nav-list.component';
import { BtnExaComponent } from './btn-example/btn-exa.component';
import { OverviewComponent } from './overview/overview.component';
import { SyntexComponent } from './syntex/syntex.component';
import { ExampleComponent } from './example/example.component';
import { ComplateExampleComponent } from './complate-example/complate-example.component';
import { BtnDwonloadComponent } from './btn-dwonload/btn-dwonload.component';
import { InfoService } from './info.service';
import { HighlightModule } from 'ngx-highlightjs';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    HighlightModule.forRoot(),
  ],
  declarations: [
    NavListComponent,
    BtnExaComponent,
    OverviewComponent,
    SyntexComponent,
    ExampleComponent,
    ComplateExampleComponent,
    BtnDwonloadComponent,
    CardComponent,
  ],
  providers:[
    PageListService,
    UpdateListService,
    InfoService,
  ],
  exports:[
    NavListComponent,
    BtnExaComponent,
    OverviewComponent,
    SyntexComponent,
    ExampleComponent,
    ComplateExampleComponent,
    BtnDwonloadComponent,
    CardComponent,
  ]
})
export class CoreModule { }
