import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsCard } from '../news-card/news-card';

@Component({
  standalone: true,
  selector: 'app-news-carousel',
  imports: [CommonModule, FormsModule, NewsCard],
  templateUrl: './news-carousel.html',
  styleUrl: './news-carousel.css',
})
export class NewsCarousel {
  newsItems = [{
    org: { name: 'Acme Events', logoUrl: 'https://via.placeholder.com/40' },
    title: 'Live Music This Weekend!',
    description: 'Join us for an open-air concert with local bands...',
    date: '2025-07-07',
    category: 'Events',
    tags: ['music', 'Thessaloniki']
  },
  {
    org: { name: 'Acme Events', logoUrl: 'https://via.placeholder.com/40' },
    title: 'Live Music This Weekend!',
    description: 'Join us for an open-air concert with local bands...',
    date: '2025-07-07',
    category: 'Events',
    tags: ['music', 'Athens']
  }, {
    org: { name: 'Acme Events', logoUrl: 'https://via.placeholder.com/40' },
    title: 'Live Music This Weekend!',
    description: 'Join us for an open-air concert with local bands...',
    date: '2025-07-07',
    category: 'Events',
    tags: ['music', 'Patra']
  },
  {
    org: { name: 'Acme Events', logoUrl: 'https://via.placeholder.com/40' },
    title: 'Live Music This Weekend!',
    description: 'Join us for an open-air concert with local bands...',
    date: '2025-07-07',
    category: 'Events',
    tags: ['music', 'Kastoria']
  },
  {
    org: { name: 'Acme Events', logoUrl: 'https://via.placeholder.com/40' },
    title: 'Live Music This Weekend!',
    description: 'Join us for an open-air concert with local bands...',
    date: '2025-07-07',
    category: 'Events',
    tags: ['music', 'Larisa']
  }];
}
