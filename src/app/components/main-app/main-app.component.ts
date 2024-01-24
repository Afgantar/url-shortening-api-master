import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { LinkInputComponent } from '../link-input/link-input.component';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
  selector: 'app-main-app',
  standalone: true,
  imports: [HeroComponent, LinkInputComponent, StatisticsComponent],
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.css'
})
export class MainAppComponent {

}
