import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../../service/scroll-animation.directive';

@Component({
  selector: 'app-work-counter',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './work-counter.component.html',
  styleUrl: './work-counter.component.scss',
})
export class WorkCounterComponent {}
