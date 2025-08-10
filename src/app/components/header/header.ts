import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KeycloakService } from '../../services/keycloak.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMobileMenuOpen: boolean = false;
  isLoggedIn: boolean = false;
  name: string | undefined = '';

  constructor(private keycloak: KeycloakService) {
    if (this.keycloak.isLoggedIn()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  login() {
    this.keycloak.login();
    this.isLoggedIn = true;
  }

  logout() {
    this.keycloak.logout();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
