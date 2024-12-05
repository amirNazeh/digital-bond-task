import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('menu_icon') menu!: ElementRef;
  @ViewChild('close_icon') close!: ElementRef;
  @ViewChild('header') header!: ElementRef;
  @ViewChildren('tab_item') tabItem!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.tabItem.forEach((link: any) => {
      link.nativeElement.addEventListener('click', () => {
        this.tabItem.forEach((tab) => {
          tab.nativeElement.classList.remove('active');
        });
        this.header.nativeElement.classList.remove('show');
        link.nativeElement.classList.add('active');
      });
    });
    this.menu.nativeElement.addEventListener('click', () => {
      this.header.nativeElement.classList.add('show');
    });
    this.close.nativeElement.addEventListener('click', () => {
      this.header.nativeElement.classList.remove('show');
    });
  }
}
