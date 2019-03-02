import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvencedRoutingModule } from './advenced-routing.module';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { RouterEventComponent } from './router-event/router-event.component';
import { CoreModule } from '../core/core.module';
import { MatCardModule } from '@angular/material';
import { MultiRouterOutletComponent } from './multi-router-outlet/multi-router-outlet.component';
import { GuardComponent } from './guard/guard.component';
import { InterceptComponent } from './intercept/intercept.component';
import { GetChildrenComponent } from './get-children/get-children.component';
import { AngularElementComponent } from './angular-element/angular-element.component';
import { ComponentDynamicComponent } from './component-dynamic/component-dynamic.component';
import { StylsComponent } from './styls/styls.component';
import { ServicesComponent } from './services/services.component';
import { ServiceInjectComponent } from './service-inject/service-inject.component';
import { AnimationComponent } from './animation/animation.component';
import { AnimationMethodsComponent } from './animation-methods/animation-methods.component';
import { NgContentComponent } from './ng-content/ng-content.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    CoreModule,
    AdvencedRoutingModule,
  ],
  declarations: [LazyLoadingComponent, RouterEventComponent, MultiRouterOutletComponent, GuardComponent, InterceptComponent, GetChildrenComponent, AngularElementComponent, ComponentDynamicComponent, StylsComponent, ServicesComponent, ServiceInjectComponent, AnimationComponent, AnimationMethodsComponent, NgContentComponent]
})
export class AdvencedModule { }
