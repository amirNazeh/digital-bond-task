import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../../service/scroll-animation.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
