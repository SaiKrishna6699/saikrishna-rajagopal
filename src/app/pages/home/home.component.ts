import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { Content as con, experience as exp, education as edu, skills as sk, projects as pro, pics } from 'src/app/models/content';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('lineAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-10%)', opacity: 0, filter: 'blur(10px)' }),
        animate('1s ease-out', style({ transform: 'translateY(0%)', opacity: 1, filter: 'blur(0)' }))
      ]),
      transition('* => *', [
        animate('1s ease-in-out', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(1.05)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ]),
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(1.5)', filter: 'blur(10px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'scale(1)', filter: 'blur(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {

  content = con;
  experience = exp;
  education = edu;
  // skills = ['Java', 'Java Script', 'Type Script', 'Angular', 'React', 'ReactNative', 'Sass/Scss', 'HTML 5', 'CSS3', 'Web Development', 'Mobile Development', 'Git', 'GitHub'];
  skills = sk;
  projects = pro;
  pics = pics;


}
