import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { projects as pro } from 'src/app/models/content';


@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.scss'],
  animations: [
    trigger('loadAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-1rem)', opacity: 0, filter: 'blur(10px)' }),
        animate('1s ease-out', style({ transform: 'translateY(0%)', opacity: 1, filter: 'blur(0)' }))
      ]),
    ])
  ]
})
export class ProjectHomeComponent {
  projects = pro;
}
