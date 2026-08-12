import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUiService } from '../../services/search-ui.service';

@Component({
  selector: 'app-mobile-header-row',
  imports: [CommonModule],
  templateUrl: './mobile-header-row.component.html',
  styleUrl: './mobile-header-row.component.scss'
})
export class MobileHeaderRowComponent {
  now = signal(new Date());
  private readonly searchUi = inject(SearchUiService);

  readonly isOpen = this.searchUi.isOpen;

  constructor() {
    setInterval(() => {
      this.now.set(new Date());
    }, 1000);
  }
}
