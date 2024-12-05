import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { WorkCounterComponent } from './components/work-counter/work-counter.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AboutComponent,
    HeroComponent,
    WorkCounterComponent,
    ContactUsComponent,
    ReviewsComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
