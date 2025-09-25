import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, SearchBarComponent, SearchResultsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  searchText: string = '';

  onSearch(query: string) {
    this.searchText = query;
  }
}
