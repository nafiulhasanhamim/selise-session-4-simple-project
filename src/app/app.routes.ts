import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { ParentComponent } from './parent/parent.component';
import { ApiComponent } from './api/api.component';

export const routes: Routes = [
  { path: '', redirectTo: 'data-binding', pathMatch: 'full' },
  { path: 'data-binding', component: DatabindingComponent },
  { path: 'parent-child', component: ParentComponent },
  { path: 'public-api', component: ApiComponent },
];
