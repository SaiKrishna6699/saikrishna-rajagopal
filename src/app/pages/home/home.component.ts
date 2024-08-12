import { Component } from '@angular/core';
import { Content as con, experience as exp, education as edu, skills as sk, projects as pro } from 'src/app/models/content';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  content = con;
  experience = exp;
  education = edu;

  // skills = ['Java', 'Java Script', 'Type Script', 'Angular', 'React', 'ReactNative', 'Sass/Scss', 'HTML 5', 'CSS3', 'Web Development', 'Mobile Development', 'Git', 'GitHub'];
  skills = sk;
  projects = pro;
}
