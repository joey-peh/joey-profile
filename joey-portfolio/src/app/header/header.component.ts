import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, Router, RouterLinkActive, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    // router.events.subscribe(x => console.log(x));
  }

  ngOnInit() {
  }
  onRouterLinkActive(l: any) {
    console.log("change detected!" + l);
  }
}
