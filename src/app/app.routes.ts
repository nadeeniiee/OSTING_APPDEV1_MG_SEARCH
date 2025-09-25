import { Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';

export const routes: Routes = [
  { path: '/ ', component: SearchBarComponent }, 
  { path: 'results/:query', component: SearchResultsComponent }, 
  { path: '**', redirectTo: '' }
];
