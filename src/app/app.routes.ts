import { Routes } from '@angular/router';
import { NewsCarousel } from './components/news-carousel/news-carousel';
import { Calendar } from './components/calendar/calendar';
import { Profile } from './components/profile/profile';
import { authGuard } from './services/auth-guard';

export const routes: Routes = [
    { path: '', component: NewsCarousel },
    { path: 'home', component: NewsCarousel },
    { path: 'profile', component: Profile, canActivate: [authGuard] },
    { path: 'calendar', component: Calendar },
    { path: 'about', component: Calendar },
    { path: 'contact', component: Calendar },
    { path: '**', redirectTo: 'home' }
];