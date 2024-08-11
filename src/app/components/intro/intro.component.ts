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
        animate('1s ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition('* => *', [
        animate('1s ease-in-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class IntroComponent {

}
