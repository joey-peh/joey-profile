import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatCardModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../app.component.css'],
})
export class AboutComponent {
  tags = [
    "VueJS", "AngularTS", "Java Spring Boot", "ASP.NET C#", "MongoDB", "SQL", "Basic Python", "Basic C++"
  ];
}
