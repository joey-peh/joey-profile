import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, MatListModule, MatDividerModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css', '../app.component.css']
})
export class ProjectDetailsComponent {

}
