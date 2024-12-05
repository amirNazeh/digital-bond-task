import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../../service/scroll-animation.directive';

@Component({
  selector: 'app-contact-us',
  standalone: true,

  imports: [CommonModule, FormsModule, ScrollAnimationDirective],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
