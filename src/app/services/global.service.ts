import { Injectable, OnChanges, SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  globalData: string;
  urlData: UrlData[];
  copiedData: string;
  openNavbar: boolean;

  constructor() {
    this.globalData = '';
    this.urlData = [];
    this.copiedData = '';
    this.openNavbar = false;
  }

  openNavbarFunc(): void {
    this.openNavbar = !this.openNavbar;
  }

  changeData(value: string): void {
    this.globalData = value;
  }

  addUrlData(original: string, short :string): void {
    this.urlData.push({
      original: original,
      shortened: short,
    })
  }

  changeIndicator(value: string): void {
    this.copiedData = value;
  }
}

interface UrlData {
  original: string;
  shortened: string;
}