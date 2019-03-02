import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { IntroComponent } from './intro/intro.component';
import { InstallComponent } from './install/install.component';
import { CommandLineComponent } from './command-line/command-line.component';
import { CliComponent } from './cli/cli.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ExampleComponent } from './example/example.component';
import { MatCardModule, MatListModule } from '@angular/material';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    BasicRoutingModule,
    MatCardModule,
    MatListModule,
    CoreModule,
  ],
  declarations: [
    IntroComponent, 
    InstallComponent, 
    CommandLineComponent, 
    CliComponent, 
    ArchitectureComponent, 
    TypescriptComponent, 
    ExampleComponent,     
  ]
})
export class BasicModule { }


