import { Injectable, HostListener, signal } from '@angular/core';

export interface SearchFlags {
  participant: boolean;
  inTitles: boolean;
  strict: boolean;
  tags: boolean;
  requests: boolean;
  contacts: boolean;
}

@Injectable({ providedIn: 'root' })
export class SearchUiService {
  readonly isOpen = signal(false);
  readonly query = signal('');
  readonly author = signal('');
  readonly isTablet  = signal(typeof window !== 'undefined' ? window.innerWidth <= 890 : false);
  readonly flags = signal<SearchFlags>({
    participant: false,
    inTitles: false,
    strict: false,
    tags: false,
    requests: false,
    contacts: false,
  });

  @HostListener('window:resize')
  onResize(): void {
    const tablet = window.innerWidth <= 890;
    this.isTablet.set(tablet);
  }

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  toggle(): void {
    this.isOpen.update((value) => !value);
  }

  setQuery(value: string): void {
    this.query.set(value);
  }

  setAuthor(value: string): void {
    this.author.set(value);
  }

  setAuthorMe(): void {
    this.author.set('Я');
  }

  clearAuthor(): void {
    this.author.set('');
  }

  setFlag(key: keyof SearchFlags, value: boolean): void {
    this.flags.update((current) => ({ ...current, [key]: value }));
  }
}
