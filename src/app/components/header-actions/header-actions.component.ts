import { Component, inject } from '@angular/core';
import { AddButtonComponent } from '../add-button/add-button.component';
import { SearchUiService } from '../../services/search-ui.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header-actions',
  standalone: true,
  imports: [AddButtonComponent, SearchComponent],
  templateUrl: './header-actions.component.html',
  styleUrl: './header-actions.component.scss',
})
export class HeaderActionsComponent {
  private readonly searchUi = inject(SearchUiService);
  readonly isTablet = this.searchUi.isTablet;
  readonly notifications = 5;
}
