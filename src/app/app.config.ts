import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { KeycloakService } from './services/keycloak.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    KeycloakService
  ]
};
