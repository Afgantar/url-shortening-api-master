import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoostComponent } from './components/boost/boost.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { GlobalService } from './services/global.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoostComponent, FooterComponent, MainAppComponent, NavbarComponent, MobileNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('navbarAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)'}),
        animate('500ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)'})),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, transform: 'translateY(-100px)'})),
      ]),
    ]),
  ],
})
export class AppComponent {
  service = inject(GlobalService);
}
