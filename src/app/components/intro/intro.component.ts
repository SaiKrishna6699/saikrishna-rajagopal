import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('lineAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('2s ease-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class IntroComponent {

}
