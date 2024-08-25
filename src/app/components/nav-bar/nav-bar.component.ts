import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChatBotComponent } from '../chat-bot/chat-bot.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  isDarkTheme: boolean = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // Get the saved theme from local storage or default to dark
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark' || savedTheme === null;
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }

  private applyTheme() {
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    document.body.classList.toggle('light-theme', !this.isDarkTheme);
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  openBot(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = 'clamp(30vw, 400px, 40rem)';
    dialogConfig.height = '80vh';
    dialogConfig.position = {
      top: '2vh',
      right: '2vw'
    };
    dialogConfig.panelClass = 'panel-class';
    dialogConfig.hasBackdrop = false;
    dialogConfig.disableClose = true;
  
    const dialogRef = this.dialog.open(ChatBotComponent, dialogConfig);
  }
  
}
