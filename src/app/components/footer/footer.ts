import { Component } from '@angular/core';
import { LucideAngularModule, Github  } from 'lucide-angular';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer {
  currentYear = new Date().getFullYear();

  icons = {
    Github,
  };
}
