import { Component, input } from '@angular/core';

export interface NavItem {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  readonly collapsed = input(false);
  readonly vertical = input(false);
  readonly hidden = input(false);

  readonly items: NavItem[] = [
    { label: 'Ссылки', icon: 'assets/icons/menu_paper_clip.svg' },
    { label: 'Контакты', icon: 'assets/icons/menu_contacts.svg' },
    { label: 'Теги', icon: 'assets/icons/menu_hash.svg' },
    { label: 'Избранное', icon: 'assets/icons/menu_favorites.svg' },
    { label: 'Посещения', icon: 'assets/icons/menu_history.svg' },
  ];
}
