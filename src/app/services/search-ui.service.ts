import { isPlatformBrowser } from '@angular/common';
import { DestroyRef, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export interface SearchFlags {
  participant: boolean;
  inTitles: boolean;
  strict: boolean;
  tags: boolean;
  requests: boolean;
  contacts: boolean;
}

const TABLET_QUERY = '(max-width: 890px)';

@Injectable({ providedIn: 'root' })
export class SearchUiService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly isOpen = signal(false);
  readonly query = signal('');
  readonly author = signal('');
  readonly isTablet = signal(false);
  readonly flags = signal<SearchFlags>({
    participant: false,
    inTitles: false,
    strict: false,
    tags: false,
    requests: false,
    contacts: false,
  });

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const mediaQuery = window.matchMedia(TABLET_QUERY);
    this.isTablet.set(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent): void => {
      this.isTablet.set(event.matches);
    };

    mediaQuery.addEventListener('change', onChange);
    this.destroyRef.onDestroy(() => mediaQuery.removeEventListener('change', onChange));
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
