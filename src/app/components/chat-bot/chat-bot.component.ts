import { AfterViewChecked, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatBotComponent implements AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom() {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  options: string[] = [
    'Just Saying Hi',
    'Learn about Sai\'s work',
    'About Sai Krishna',
    'My Experience',
    'My Skills',
    'My Projects',
    'More About Me',
    'Connect with you',
    'Other inquiries',
  ];

  messages: { text: string, type: 'user' | 'bot' }[] = [
    { text: 'Hi', type: 'bot' },
    { text: `I'm Sai Bot. I'm here to help you with any questions you might have about Sai's work.`, type: 'bot' },
    { text: `How can I help you today?`, type: 'bot' }
  ];

  optionsVisible: boolean = true;
  userMessage: string[] = [];

  constructor(public dialogRef: MatDialogRef<ChatBotComponent>) { }

  close() {
    this.dialogRef.close();
  }

  handleOption(option: string) {
    // Add the user's message
    this.userMessage.push(option);
    this.messages.push({ text: `${option}`, type: 'user' });

    // Hide options
    this.optionsVisible = false;

    // Respond with bot message after a short delay
    setTimeout(() => {
      this.respondToOption(option);
    }, 500); // Adjust delay as needed
  }
  removeOption(option: string) {
    const index = this.options.indexOf(option);
    if (index > -1) {
      this.options.splice(index, 1); // Removes the item at the specified index
    }
  }

  respondToOption(option: string) {
    this.removeOption('Just Saying Hi',)
    let response: string | string[];
    switch (option) {
      case 'Just Saying Hi':
        response = 'Hello there! How can I assist you today?';
        break;
      case 'Connect with you':
        response = [
          'I\'m here to help with Sai\'s work. Please let me know what you need.',
          'You can connect with me on Instagram and LinkedIn.',
          'Instagram: <a href="https://www.instagram.com/saikrishna.rajagopal/" target="_blank" rel="noopener noreferrer">My Instagram</a>',
          'LinkedIn: <a href="https://www.linkedin.com/in/saikrishna-rajagopal/" target="_blank" rel="noopener noreferrer">My LinkedIn</a>'
        ];
        break;
      case 'Learn about Sai\'s work':
        response = 'Sai is working on several exciting projects. What would you like to know more about?';
        break;
      case 'Other inquiries':
        response = [
          'Feel free to ask any other questions you might have!',
          'You can reach me via email at <a href="mailto:saikrishnarajagopal@gmail.com">Email me</a>.'
        ];
        break;
      case 'About Sai Krishna':
        response = 'I\'m a Full Stack Developer dedicated to crafting immersive, user-centric web applications. I started my career in software development at the end of 2021 and have experience in both front-end and back-end development.';
        break;
      case 'My Experience':
        response = 'I currently work at Relanto.ai as a Software Engineer, developing web applications and integrating security features. Previously, I worked at Mphasis LTD as an Associate Software Engineer, focusing on front-end development and API testing.';
        break;
      case 'My Skills':
        response = 'I am skilled in Java, JavaScript, TypeScript, Python, MySQL, MongoDB, Angular, React, and many other technologies. Click on a skill to see my proficiency percentage.';
        break;
      case 'My Projects':
        response = 'I have worked on several projects including a test portal, weather app, currency converter, and a bus booking system. Each project showcases different aspects of my development skills and interests.';
        break;
      case 'More About Me':
        response = 'I grew up in Tirupathi and have always had a passion for design and technology. I enjoy long drives, listening to music, and spending time in nature. I also love cats and dogs!';
        break;
      default:
        response = 'I didn\'t understand that option.';
        break;
    }

    if (Array.isArray(response)) {
      response.forEach(text => this.messages.push({ text, type: 'bot' }));
    } else {
      this.messages.push({ text: response, type: 'bot' });
    }

    this.optionsVisible = true;
  }

}
