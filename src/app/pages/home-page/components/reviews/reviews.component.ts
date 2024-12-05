import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../../service/scroll-animation.directive';
@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    TagModule,
    CommonModule,
    ScrollAnimationDirective,
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  dataList = [
    '../../../../../assets/img/review1.png',
    '../../../../../assets/img/review2.png',
    '../../../../../assets/img/review3.png',
    '../../../../../assets/img/review1.png',
    '../../../../../assets/img/review2.png',
    '../../../../../assets/img/review3.png',
  ];
}
