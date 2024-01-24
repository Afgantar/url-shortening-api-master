import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  animations: [
    trigger('transitionAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class FooterComponent {
  infos: Infos[];
  logos: Logos[];
  hovering: string;

  constructor() {
    this.infos = [
      {
        title: 'Features',
        contents: ['Link Shortening', 'Branded Links', 'Analytics'],
      },
      {
        title: 'Resources',
        contents: ['Blog', 'Developers', 'Support'],
      },
      {
        title: 'Company',
        contents: ['About', 'Our Team', 'Careers', 'Contact'],
      },
    ];
    this.logos = [
      {
        original: './assets/images/icon-facebook.svg',
        blue: './assets/images/icon-facebook-blue.svg',
      },
      {
        original: './assets/images/icon-twitter.svg',
        blue: './assets/images/icon-twitter-blue.svg',
      },
      {
        original: './assets/images/icon-pinterest.svg',
        blue: './assets/images/icon-pinterest-blue.svg',
      },
      {
        original: './assets/images/icon-instagram.svg',
        blue: './assets/images/icon-instagram-blue.svg',
      },
    ];
    this.hovering = '';
  }

  onMouseEnter(value: string): void {
    this.hovering = value;
  }

  onMouseLeave(): void {
    this.hovering = '';
  }
}

interface Infos {
  title: string;
  contents: string[];
}

interface Logos {
  original: string;
  blue: string;
}
