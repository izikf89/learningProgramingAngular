import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BindingComponent } from './binding/binding.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { DirectiveBuiltInComponent } from './directive-built-in/directive-built-in.component';
import { CoreModule } from '../core/core.module';
import { MatCardModule } from '@angular/material';
import { PropertiesComponent } from './properties/properties.component';
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

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    MainRoutingModule,
    MatCardModule,
  ],
  declarations: [
    BindingComponent, 
    HashtagComponent, 
    DirectiveBuiltInComponent, PropertiesComponent, DirectiveCustomComponent, HooksMethodComponent, ServiceComponent, EventComponent, 
    InputAttributeComponent, PipeComponent, InputComponent, FormComponent, CustomValidationComponent, FormDynamicComponent, AjaxComponent, RoutingComponent,
  ]
})
export class MainModule { }
