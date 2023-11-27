import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatDividerModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css', '../app.component.css']
})
export class EducationComponent {

}
