import { AfterViewInit, Component } from '@angular/core';

declare let Swiper: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'safeplace_frontend';
  isOpenMenu: boolean = false;

  constructor() {}

  ngAfterViewInit(): void {
    new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 50,
      slidesPerView: 1,
      grabCursor: true,
      centeredSlides: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        991: {
          slidesPerView: 3,
          spaceBetween: 200,
        }
      }

    });
  }

  toggleMenu(): void {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
