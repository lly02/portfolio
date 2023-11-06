import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-selected-projects',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './selected-projects.component.html',
  styleUrls: ['./selected-projects.component.css'],
})
export class SelectedProjectsComponent {}
