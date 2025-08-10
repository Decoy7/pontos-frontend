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

  login(): void {
    this.keycloak.login();
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
}
