import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { InstallComponent } from './install/install.component';
import { CommandLineComponent } from './command-line/command-line.component';
import { CliComponent } from './cli/cli.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ExampleComponent } from './example/example.component';
import { InfoService } from '../core/info.service';

let routes: Routes = [
  {path: 'intro', component: IntroComponent },
  {path: 'install', component: InstallComponent },
  {path: 'commandLine', component: CommandLineComponent },
  {path: 'cli', component: CliComponent },
  {path: 'architecture', component: ArchitectureComponent },
  {path: 'typescript', component: TypescriptComponent },
  {path: 'example', component: ExampleComponent, },
];

let infoService = new InfoService();
routes = infoService.addRoutesForMobile(routes); 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BasicRoutingModule { }



