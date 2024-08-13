import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChatBotComponent } from '../chat-bot/chat-bot.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(public dialog: MatDialog){
    
  }

  isDarkTheme: boolean = true;

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark';
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    document.body.classList.toggle('light-theme', !this.isDarkTheme);
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    document.body.classList.toggle('light-theme', !this.isDarkTheme);
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  openBot(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = 'clamp(30vw, 300px, 40rem)';
    dialogConfig.height = '87vh';
    dialogConfig.position = {
      top: '2vh',
      right: '2vw'
    };
    dialogConfig.panelClass = 'panel-class';
    dialogConfig.hasBackdrop = false;
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(ChatBotComponent, dialogConfig)
  }
}
