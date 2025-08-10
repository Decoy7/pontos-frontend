import { Routes } from '@angular/router';
import { NewsCarousel } from './components/news-carousel/news-carousel';
import { Calendar } from './components/calendar/calendar';

export const routes: Routes = [
    { path: '', component: NewsCarousel },
    { path: 'home', component: NewsCarousel },
    { path: 'calendar', component: Calendar },
    { path: 'about', component: Calendar },
    { path: 'contact', component: Calendar },
    { path: '**', redirectTo: 'home' }
];