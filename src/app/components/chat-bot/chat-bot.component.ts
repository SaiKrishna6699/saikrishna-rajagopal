import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewChecked, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
  animations: [
    trigger('loadBot', [
      transition(':enter', [
        style({ transform: 'translateY(-1rem)', opacity: 0, filter: 'blur(10px)' }),
        animate('1s ease-out', style({ transform: 'translateY(0%)', opacity: 1, filter: 'blur(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1, filter: 'blur(0)' }),
        animate('1s ease-in', style({ transform: 'translateY(-1rem)', opacity: 0, filter: 'blur(10px)' }))
      ])
    ]),
  ],
  encapsulation: ViewEncapsulation.None
})
export class ChatBotComponent implements AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  options: string[] = [
    'Just Saying Hi',
    'Learn about Sai Krishna\'s work',
    'About Sai Krishna',
    'Sai\'s Education',
    'Sai\'s Experience',
    'Sai\'s Skills',
    'Sai\'s Projects',
    'Sai\'s Achievements',
    'Sai Krishna\'s Work Culture',
    'More About Sai Krishna',
    'Connect with Sai Krishna',
    'Other inquiries',
    'Close Bot'
  ];

  messages: { text: string, type: 'user' | 'bot' }[] = [
    { text: 'Hi', type: 'bot' },
    { text: `Hello! I'm the chatbot for Sai Krishna. How can I assist you today?`, type: 'bot' },
    { text: `Feel free to choose an option from the list to learn more about Sai Krishna.`, type: 'bot' }
  ];

  optionsVisible: boolean = true;

  constructor(public dialogRef: MatDialogRef<ChatBotComponent>) {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom() {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll to bottom failed', err);
    }
  }

  close() {
    this.dialogRef.close();
  }

  handleOption(option: string) {
    this.messages.push({ text: option, type: 'user' });
    this.optionsVisible = false;

    setTimeout(() => {
      this.respondToOption(option);
    }, 500); // Adjust delay as needed
  }

  private respondToOption(option: string) {
    this.options = this.options.filter(opt => opt !== 'Just Saying Hi');
    let response: string | string[];

    switch (option) {
      case 'Just Saying Hi':
        response = 'Hello there! How can I assist you today?';
        break;
      case 'Connect with Sai Krishna':
        response = [
          'I\'m here to assist with information about Sai Krishna. You can connect with him on the following platforms:',
          'Instagram: <a href="https://www.instagram.com/saikrishna.rajagopal/" target="_blank" rel="noopener noreferrer">Sai Krishna\'s Instagram</a>',
          'LinkedIn: <a href="https://www.linkedin.com/in/saikrishna-rajagopal/" target="_blank" rel="noopener noreferrer">Sai Krishna\'s LinkedIn</a>',
          'Feel free to reach out via these links!'
        ];
        break;
      case 'Learn about Sai Krishna\'s work':
        response = 'Sai Krishna is involved in a variety of innovative projects. Is there a specific project or area of his work that interests you?';
        break;
      case 'About Sai Krishna':
        response = 'Sai Krishna is a Full Stack Developer with a Bachelor’s degree in Computer Science and Engineering from Hindustan Institute of Technology and Science. He has a solid foundation in both front-end and back-end technologies and is passionate about creating user-centric web applications.';
        break;
      case 'Sai\'s Education':
        response = 'Sai Krishna earned his Bachelor of Technology in Computer Science and Engineering from Hindustan Institute of Technology and Science, Chennai. He graduated with a GPA of 8.1/10 and studied key areas like Web Programming, Agile Methodologies, and Database Management Systems.';
        break;
      case 'Sai\'s Experience':
        response = 'Sai Krishna is currently a Software Engineer at Relanto.ai, where he works on developing web applications and integrating security features. Previously, he was an Associate Software Engineer at Mphasis LTD, focusing on front-end development and API testing for a US brokerage application.';
        break;
      case 'Sai\'s Skills':
        response = 'Sai Krishna is skilled in a wide range of technologies including Java, JavaScript, TypeScript, Python, MySQL, MongoDB, Angular, React, and Spring Boot. He is also proficient in using tools like Git, Bitbucket, and JIRA for development and project management.';
        break;
      case 'Sai\'s Projects':
        response = 'Sai Krishna has worked on several impactful projects such as a Bus Booking System, a Realtime Currency Converter Application, and a Weather Forecast Application. These projects demonstrate his ability to build robust and user-friendly web applications using various technologies.';
        break;
      case 'Sai\'s Achievements':
        response = 'Sai Krishna has made significant contributions to various projects, including developing a complex search interface for Cisco and optimizing APIs for improved performance. His achievements reflect his dedication to delivering high-quality solutions and enhancing user experiences.';
        break;
      case 'Sai Krishna\'s Work Culture':
        response = 'Sai Krishna values a collaborative and innovative work environment. He believes in continuous learning and applying new technologies to solve problems effectively. His approach to work emphasizes teamwork, creativity, and professional growth.';
        break;
      case 'More About Sai Krishna':
        response = 'Sai Krishna grew up in Tirupathi and has a keen interest in design and technology. Outside of work, he enjoys long drives, listening to music, and spending time in nature. He also has a love for cats and dogs.';
        break;
      case 'Other inquiries':
        response = [
          'If you have other questions or need further information, feel free to ask!',
          'You can also contact Sai Krishna directly via email at <a href="mailto:saikrishnarajagopal@gmail.com">Email Sai Krishna</a>.'
        ];
        break;
      case 'Close Bot':
        this.close();
        response = 'Thank you for chatting! If you have any more questions in the future, feel free to reach out. Goodbye!';
        break;
      default:
        response = 'I didn\'t quite understand that. Could you please select an option from the list?';
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
