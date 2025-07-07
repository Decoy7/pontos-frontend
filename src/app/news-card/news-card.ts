import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-news-card',
  imports: [CommonModule],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css'
})
export class NewsCard {
  @Input() item!: {
    org: { name: string; logoUrl: string };
    title: string;
    description: string;
    date: string;
    category: string;
    tags: string[];
  };
}
