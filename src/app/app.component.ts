import { Component, HostListener } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SaiKrishna';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    if (progressBar) {
      progressBar.style.width = `${scrollPercentage}%`;
    }
  }
}
