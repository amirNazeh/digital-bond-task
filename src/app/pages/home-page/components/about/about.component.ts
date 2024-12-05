import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../../service/scroll-animation.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
