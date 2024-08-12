import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() title: string ="";
  @Input() sub_text: string = "";
  @Input() text_content: string = "";
  @Input() content: any = [];
}
