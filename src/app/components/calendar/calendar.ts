import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})
export class Calendar {
  currentDate = new Date();
  calendarDays: (Date | undefined)[] = [];
  selectedEvent: any = null;
  isModalVisible = false;

  events = [
    {
      title: 'Community Meetup',
      date: new Date(2025, 6, 14),
      description: 'A local meetup about web development.'
    },
    {
      title: 'TechStars Webinar',
      date: new Date(2025, 6, 21),
      description: 'Online tech session for startups.'
    },
    {
      title: 'StarsTech Webinar',
      date: new Date(2025, 6, 21),
      description: 'Online tech session for startups.'
    }
  ];

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    this.calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      this.calendarDays.push(undefined);
    }

    for (let day = 1; day <= totalDays; day++) {
      this.calendarDays.push(new Date(year, month, day));
    }
  }

  getEvents(date?: Date) {
    if (!date) return [];
    return this.events.filter(e =>
      e.date.getDate() === date.getDate() &&
      e.date.getMonth() === date.getMonth() &&
      e.date.getFullYear() === date.getFullYear()
    );
  }

  previousMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }

  selectEvent(event: any) {
    this.selectedEvent = event;
    setTimeout(() => (this.isModalVisible = true), 10);
  }

  closeModal() {
    this.isModalVisible = false;
    setTimeout(() => (this.selectedEvent = null), 200);
  }

}
