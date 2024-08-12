import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { projects as pro } from 'src/app/models/content';


@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.scss'],
  animations: [
    trigger('lineAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-2%)', opacity: 0, filter: 'blur(10px)' }),
        animate('1s ease-out', style({ transform: 'translateY(0)', opacity: 1, filter: 'blur(0)' }))
      ]),
      transition('* => *', [
        animate('1s ease-in-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ]),
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)', filter: 'blur(10px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'scale(1)', filter: 'blur(0)' }))
      ])
    ])
  ]
})
export class ProjectHomeComponent {
  projects = pro;
}
