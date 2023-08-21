import { Component, Input } from '@angular/core';
import { CardMobileContent } from './card-mobile-interface';

@Component({
  selector: 'app-card-mobile',
  templateUrl: './card-mobile.component.html',
  styleUrls: ['./card-mobile.component.scss'],
})
export class CardMobileComponent {
  @Input() cardMobileContent!: CardMobileContent;
  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
