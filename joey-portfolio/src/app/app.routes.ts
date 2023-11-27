import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { EducationComponent } from './education/education.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
    { path: '', component: AboutComponent },
    { path: 'employment-history', component: EmploymentHistoryComponent },
    { path: 'education', component: EducationComponent },
    { path: 'projects', component: ProjectDetailsComponent }
];

