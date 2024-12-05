import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnInit {
  @Input('appScrollAnimation') animationClass: string = 'animate__fadeInUp'; // اسم الأنميشن الافتراضي

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('animate__animated', this.animationClass);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
  }
}
