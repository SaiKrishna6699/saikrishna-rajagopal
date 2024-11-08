import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SaiKrishna';
  showArrow = false

  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    if(scrollPercentage > 5){
      this.showArrow = true;
    }
    else{
      this.showArrow = false;
    }

    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    console.log(scrollPercentage)
    if (progressBar) {
      progressBar.style.width = `${scrollPercentage}%`;
    }
  }

  arrowClick(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adds a smooth scroll effect
    });
  }
}
