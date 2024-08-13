import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChatBotComponent } from '../chat-bot/chat-bot.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() title: String = '';
  @Input() sub_text: string = "";
  @Input() content!: SafeHtml;

  constructor(public dialog: MatDialog) {

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
