import { Routes } from '@angular/router';
import { LayoutChallengeComponent } from './pages/layout-challenge/layout-challenge.component';

export const routes: Routes = [
  { path: '', component: LayoutChallengeComponent },
  { path: '**', redirectTo: '' },
];
