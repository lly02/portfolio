import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { IntroComponent } from './intro/intro.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app',
  standalone: true,
  imports: [CommonModule, NavComponent, IntroComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
