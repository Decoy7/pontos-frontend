import { Routes } from '@angular/router';
import { NewsCarousel } from './news-carousel/news-carousel';
import { Calendar } from './calendar/calendar';

export const routes: Routes = [
    { path: '', component: NewsCarousel },
    { path: 'home', component: NewsCarousel },
    { path: 'calendar', component: Calendar },
];