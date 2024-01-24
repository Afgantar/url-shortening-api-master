import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectionNames: string[];
  service = inject(GlobalService);

  constructor() {
    this.selectionNames = ['Features', 'Pricing', 'Resources'];
  }

  onClick(): void {
    this.service.openNavbarFunc();
  }
}
