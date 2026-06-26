import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  scrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
