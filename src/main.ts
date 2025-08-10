import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { KeycloakService } from './app/services/keycloak.service';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

const keycloakService = new KeycloakService();

keycloakService.init()
  .catch((err) => {
    console.warn('Keycloak init failed:', err);
  })
  .finally(() => {
    bootstrapApplication(App, {
      ...appConfig,
      providers: [{ provide: KeycloakService, useValue: keycloakService },provideRouter(routes)],
    }).catch((err) => console.error('Angular bootstrap failed:', err));
  });