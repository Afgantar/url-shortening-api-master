import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() content: string | undefined;
  @Input() title: string | undefined;
  @Input() logo: string | undefined;
  @Input() offset: string | undefined;
}
