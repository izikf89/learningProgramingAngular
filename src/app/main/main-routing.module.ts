import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { BindingComponent } from './binding/binding.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { DirectiveBuiltInComponent } from './directive-built-in/directive-built-in.component';
import { DirectiveCustomComponent } from './directive-custom/directive-custom.component';
import { HooksMethodComponent } from './hooks-method/hooks-method.component';
import { ServiceComponent } from './service/service.component';
import { EventComponent } from './event/event.component';
import { InputAttributeComponent } from './input-attribute/input.component';
import { PipeComponent } from './pipe/pipe.component';
import { InputComponent } from './input/input.component';
import { FormComponent } from './form/form.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { AjaxComponent } from './ajax/ajax.component';
import { RoutingComponent } from './routing/routing.component';
import { InfoService } from '../core/info.service';

let routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'properties'},
  {path: 'properties', component: PropertiesComponent },
  {path: 'binding', component: BindingComponent },
  {path: 'hashtag', component: HashtagComponent },
  {path: 'directive-built-in', component: DirectiveBuiltInComponent },
  {path: 'service', component: ServiceComponent },
  {path: 'inputAttribute', component: InputAttributeComponent },
  {path: 'event', component: EventComponent },
  {path: 'directive-custom', component: DirectiveCustomComponent },
  {path: 'hooks-method', component: HooksMethodComponent },
  {path: 'pipe', component: PipeComponent },
  {path: 'input', component: InputComponent },
  {path: 'form', component: FormComponent },
  {path: 'custom-validation', component: CustomValidationComponent },
  {path: 'form-dynamic', component: FormDynamicComponent },
  {path: 'ajax', component: AjaxComponent },
  {path: 'routing', component: RoutingComponent },
];

let infoService = new InfoService();
routes = infoService.addRoutesForMobile(routes); 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
