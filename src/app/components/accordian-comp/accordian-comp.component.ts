import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-accordian-comp',
  templateUrl: './accordian-comp.component.html',
  styleUrls: ['./accordian-comp.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('void', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('*', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden'
      })),
      transition('void <=> *', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class AccordianCompComponent implements OnInit {
  ngOnInit(): void {
    this.isRotated = new Array(this.tabs.length).fill(false);
  }
  isRotated: boolean[] = [];

  expand(i: any): any {
    this.isRotated[i] = !this.isRotated[i];
  }

  @Input() tabs: any = [];
  @Input() title: string ="";
}
