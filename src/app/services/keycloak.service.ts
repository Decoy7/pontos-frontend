// src/app/services/keycloak.service.ts
import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private keycloak!: Keycloak;

  init(): Promise<boolean> {
    this.keycloak = new Keycloak({
      url: 'https://auth.michfoti.org',
      realm: 'Pontos',
      clientId: 'pontos-frontend',
    });

    return this.keycloak.init({
      // onLoad: 'check-sso', 
      silentCheckSsoRedirectUri: window.location.origin + 'src/assets/silent-check-sso.html',
      pkceMethod: 'S256',
      checkLoginIframe: false
    });
  }

  login(redirectUri?: string): void {
    this.keycloak.login({ redirectUri: redirectUri || window.location.origin });
  }

  logout(): void {
    this.keycloak.logout({ redirectUri: window.location.origin });
  }

  isLoggedIn(): boolean {
    return this.keycloak?.authenticated ?? false;
  }

  getToken(){
    return this.keycloak.token;
  }

  getName(): string | undefined {
    return this.keycloak?.tokenParsed?.['name'];
  }
  
  getEmail(): string | undefined {
    return this.keycloak?.tokenParsed?.['email'];
  }
  
  getUsername(): string | undefined {
    return this.keycloak?.tokenParsed?.['preferred_username'];
  }

  getRole(): string | undefined {
    return this.keycloak?.tokenParsed?.['realm_access']?.['roles'][0];
  }
}
