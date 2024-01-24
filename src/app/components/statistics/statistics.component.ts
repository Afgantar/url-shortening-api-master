import { Component, HostListener, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { GlobalService } from '../../services/global.service';
import { LinksCardComponent } from '../links-card/links-card.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CardComponent, LinksCardComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
  animations: [
    trigger('cardEnter', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms linear', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms linear', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class StatisticsComponent {
  listData = inject(GlobalService).urlData;
  cardData: CardData[];
  windowWidth: number;

  constructor() {
    this.cardData = [
      {
        title: 'Brand Recognition',
        content: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
        logo: './assets/images/icon-brand-recognition.svg',
        offset: '-30',
      },
      {
        title: 'Detailed Records',
        content: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
        logo: './assets/images/icon-detailed-records.svg',
        offset: '0',
      },
      {
        title: 'Fully Customizable',
        content: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
        logo: './assets/images/icon-fully-customizable.svg',
        offset: '30',
      },
    ];
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
  }

}

interface CardData {
  title: string;
  content: string;
  logo: string;
  offset: string;
}