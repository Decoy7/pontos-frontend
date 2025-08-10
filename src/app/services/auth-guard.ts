import { inject } from '@angular/core';
import { CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { KeycloakService } from './keycloak.service';

export const authGuard: CanActivateFn = (route, state: RouterStateSnapshot) => {
  const keycloakService = inject(KeycloakService);

  if (keycloakService.isLoggedIn()) {
    return true;
  }

  const redirectUri = window.location.origin + state.url;
  keycloakService.login(redirectUri);

  return false;
};
