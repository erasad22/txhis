import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IncidentComponent } from './incident/incident.component';
import { TemplatesComponent } from './templates/templates.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/incident'
  },
  {
    path: 'incident',
    component: IncidentComponent,
  },
  {
    path: 'template',
    component: TemplatesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
