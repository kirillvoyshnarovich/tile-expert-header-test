import { Component, HostListener, inject, signal } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { SearchComponent } from '../search/search.component';
import { HeaderActionsComponent } from '../header-actions/header-actions.component';
import { SearchUiService } from '../../services/search-ui.service';
import { MobileHeaderRowComponent } from '../mobile-header-row/mobile-header-row.component';
import { AddButtonComponent } from '../add-button/add-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent,
    SearchComponent,
    NavMenuComponent,
    AddButtonComponent,
    HeaderActionsComponent,
    MobileHeaderRowComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly searchUi = inject(SearchUiService);
  readonly isTablet = this.searchUi.isTablet;
  readonly isMenuOpen = signal(false);
  readonly isSearchOpen = this.searchUi.isOpen;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;

    if (this.isSearchOpen() && !this.isTablet()) {
      if (!target?.closest('app-search') && !target?.closest('.search')) {
        this.searchUi.close();
      }
    }
  }
}
