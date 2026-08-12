import {
  Component,
  ElementRef,
  HostListener,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchUiService } from '../../services/search-ui.service';
import { SearchFiltersComponent } from '../search-filters/search-filters.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    SearchFiltersComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  private readonly searchUi = inject(SearchUiService);
  private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('queryInput');
  private readonly mobileInputRef = viewChild<ElementRef<HTMLInputElement>>('mobileQueryInput');

  readonly isOpen = this.searchUi.isOpen;
  readonly query = this.searchUi.query;
  readonly isTablet = this.searchUi.isTablet;

  open(): void {
    this.searchUi.open();
    queueMicrotask(() => {
      if (window.innerWidth <= 890) {
        this.mobileInputRef()?.nativeElement.focus();
      } else {
        this.inputRef()?.nativeElement.focus();
      }
    });
  }

  close(): void {
    this.searchUi.close();
  }

  onQueryChange(value: string): void {
    this.searchUi.setQuery(value);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) {
      this.close();
    }
  }
}
