import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-boost',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boost.component.html',
  styleUrl: './boost.component.css'
})
export class BoostComponent implements OnInit {
  backgroundImage: string;
  windowWidth: number;

  constructor() {
    this.backgroundImage = '';
    this.windowWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.setBackgroundImage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
    this.setBackgroundImage();
  }

  setBackgroundImage() {
    if(this.windowWidth < 451) {
      this.backgroundImage = 'url(\'./assets/images/bg-boost-mobile.svg\')'
    }
    else {
      this.backgroundImage = 'url(\'./assets/images/bg-boost-desktop.svg\')'
    }
  }
}
