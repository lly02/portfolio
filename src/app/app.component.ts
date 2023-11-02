import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { IntroComponent } from './intro/intro.component';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { SelectedProjectsComponent } from './selected-projects/selected-projects.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    IntroComponent,
    AboutMeComponent,
    ContactComponent,
    SelectedProjectsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
