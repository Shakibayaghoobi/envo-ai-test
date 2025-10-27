import { Routes } from '@angular/router';
import { LayoutChallengeComponent } from './pages/layout-challenge/layout-challenge.component';
import { BugHuntComponent } from './components/bug-hunt/bug-hunt.component';

export const routes: Routes = [
  { path: '', component: LayoutChallengeComponent },
  { path: 'bug-hunt', component: BugHuntComponent },
  { path: '**', redirectTo: '' },
];
