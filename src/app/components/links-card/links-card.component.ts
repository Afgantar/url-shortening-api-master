import { Component, Input, OnInit, inject } from '@angular/core';
import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-links-card',
  standalone: true,
  imports: [ClipboardModule, CommonModule],
  templateUrl: './links-card.component.html',
  styleUrl: './links-card.component.css',
})
export class LinksCardComponent {
  indicator = inject(GlobalService);
  @Input() originalLink: string;
  @Input() shortenedLink: string;

  constructor() {
    this.originalLink = '';
    this.shortenedLink = '';
  }

  click(): void {
    this.indicator.changeIndicator(this.shortenedLink)
    console.log('Indicator value: '+this.indicator, 'Short Link: '+this.shortenedLink)
  }
}
