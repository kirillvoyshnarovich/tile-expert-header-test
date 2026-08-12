import { Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchFlags, SearchUiService } from '../../services/search-ui.service';

@Component({
  selector: 'app-search-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss',
})
export class SearchFiltersComponent {
  private readonly searchUi = inject(SearchUiService);

  readonly mobile = input(false);
  readonly author = this.searchUi.author;
  readonly flags = this.searchUi.flags;

  readonly generalOptions: { key: keyof SearchFlags; label: string }[] = [
    { key: 'participant', label: 'Я участник' },
    { key: 'inTitles', label: 'В заголовках' },
    { key: 'strict', label: 'Строгий поиск' },
  ];

  readonly onlyOptions: { key: keyof SearchFlags; label: string }[] = [
    { key: 'tags', label: 'Теги' },
    { key: 'requests', label: 'Просьбы' },
    { key: 'contacts', label: 'Контакты' },
  ];

  onAuthorChange(value: string): void {
    this.searchUi.setAuthor(value);
  }

  setMe(): void {
    this.searchUi.setAuthorMe();
  }

  clearAuthor(): void {
    this.searchUi.clearAuthor();
  }

  onFlagChange(key: keyof SearchFlags, value: boolean): void {
    this.searchUi.setFlag(key, value);
  }
}
