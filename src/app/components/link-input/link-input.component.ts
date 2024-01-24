import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
// import { environment } from '../../../environments/environment';
import dotenv from 'dotenv';

@Component({
  selector: 'app-link-input',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './link-input.component.html',
  styleUrl: './link-input.component.css',
  animations: [
    trigger('showMessage', [
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
export class LinkInputComponent implements OnInit {
  private apiUrl: string;
  http = inject(HttpClient);
  service = inject(GlobalService);
  backgroundImage: string;
  empty: Empty;
  windowWidth: number;

  constructor() {
    this.apiUrl = process.env.API_KEY as string;
    this.empty = {
      status: false,
      message: '',
    };
    this.windowWidth = window.innerWidth;
    this.backgroundImage = '';
  }

  ngOnInit(): void {
    this.setBackgroundImage();
  }

  inputChange(input: string): void {
    this.service.globalData = input;
  }

  click(): void {
    if(!this.service.globalData) {
      this.empty = {
        status: true,
        message: 'Please add a link',
      };
      return;
    }
    this.postFunction();
  }

  postFunction(): void {
    const url = `${this.apiUrl}/api/post`;
    this.http.post(url, {
      url: this.service.globalData,
    }).subscribe({
      next: (res: any) => {
        this.service.addUrlData(this.service.globalData, res.result_url as string);
        this.service.globalData = '';
        this.empty = {
          status: false,
          message: '',
        };
      },
      error: (error) => {
        this.empty = {
          status: true,
          message: 'Input a valid link',
        }
      }
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
    this.setBackgroundImage();
  }

  setBackgroundImage() {
    if(this.windowWidth < 451) {
      this.backgroundImage = 'url(\'./assets/images/bg-shorten-mobile.svg\')'
    }
    else {
      this.backgroundImage = 'url(\'./assets/images/bg-shorten-desktop.svg\')'
    }
  }
}

interface Empty {
  status: boolean;
  message: string;
}