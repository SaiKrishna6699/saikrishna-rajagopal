import { Component } from '@angular/core';
import { Content as con, experience as exp, education as edu, skills as sk } from './models/content';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SaiKrishna';

  content = con;
  experience = exp;
  education = edu;

  // skills = ['Java', 'Java Script', 'Type Script', 'Angular', 'React', 'ReactNative', 'Sass/Scss', 'HTML 5', 'CSS3', 'Web Development', 'Mobile Development', 'Git', 'GitHub'];
  skills = sk;
}
