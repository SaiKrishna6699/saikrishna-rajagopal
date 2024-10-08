import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IntroComponent } from './components/intro/intro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { AboutComponent } from './components/about/about.component';
import { AccordianCompComponent } from './components/accordian-comp/accordian-comp.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectHomeComponent } from './pages/project-home/project-home.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IntroComponent,
    AboutComponent,
    AccordianCompComponent,
    SkillsComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectHomeComponent,
    PhotosComponent,
    ChatBotComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    AccordionModule,
    ButtonModule,
    NgApexchartsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
