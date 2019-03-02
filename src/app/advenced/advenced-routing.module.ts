import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { RouterEventComponent } from './router-event/router-event.component';
import { MultiRouterOutletComponent } from './multi-router-outlet/multi-router-outlet.component';
import { GuardComponent } from './guard/guard.component';
import { InterceptComponent } from './intercept/intercept.component';
import { GetChildrenComponent } from './get-children/get-children.component';
import { InfoService } from '../core/info.service';
import { AngularElementComponent } from './angular-element/angular-element.component';
import { ComponentDynamicComponent } from './component-dynamic/component-dynamic.component';
import { StylsComponent } from './styls/styls.component';
import { ServicesComponent } from './services/services.component';
import { ServiceInjectComponent } from './service-inject/service-inject.component';
import { AnimationComponent } from './animation/animation.component';
import { AnimationMethodsComponent } from './animation-methods/animation-methods.component';
import { NgContentComponent } from './ng-content/ng-content.component';

let routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'router-event'},
  { path: 'router-event', component: RouterEventComponent },
  { path: 'multi-router-outlet', component: MultiRouterOutletComponent },
  { path: 'lazy-loading', component: LazyLoadingComponent },
  { path: 'guard', component: GuardComponent },
  { path: 'intercept', component: InterceptComponent },
  { path: 'get-children', component: GetChildrenComponent },
  { path: 'dynamic-component', component: ComponentDynamicComponent },
  { path: 'angular-element', component: AngularElementComponent },
  { path: 'styles', component: StylsComponent },
  { path: 'services-provide', component: ServicesComponent },
  { path: 'services-inject', component: ServiceInjectComponent },
  { path: 'animations', component: AnimationComponent },
  { path: 'animations-methods', component: AnimationMethodsComponent },
  { path: 'ng-content', component: NgContentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvencedRoutingModule { }
