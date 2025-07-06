import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from "./footer/footer";
import { RouterOutlet } from '@angular/router';
import { MainContent } from './main-content/main-content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header, Footer,MainContent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
