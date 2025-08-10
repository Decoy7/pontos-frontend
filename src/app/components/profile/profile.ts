import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../services/keycloak.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  name: string | undefined;
  email: string | undefined;
  username: string | undefined;
  role: string | undefined;

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.name = this.keycloakService.getName();
    this.email = this.keycloakService.getEmail();
    this.username = this.keycloakService.getUsername();
    this.role = this.keycloakService.getRole();
  }

  logout(): void {
    this.keycloakService.logout();
  }
}
