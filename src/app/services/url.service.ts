import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private url: string = '';

  setUrl(url: string) {
    this.url = url;
  }

  getUrl(): string {
    return this.url;
  }
}
