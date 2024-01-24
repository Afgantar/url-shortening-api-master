import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css'
})
export class MobileNavbarComponent {
  selectionNames: string[];

  constructor() {
    this.selectionNames = ['Features', 'Pricing', 'Resources'];
  }
}
