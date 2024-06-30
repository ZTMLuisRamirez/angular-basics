import { Component, signal } from '@angular/core';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  // template: `<p>Hello world!</p>`,
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PostComponent, CommonModule],
  // styles: ['']
})
export class AppComponent {
  name = signal('luis');
  imageURL = signal('https://picsum.photos/id/237/500/500');
  images = signal([
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
  ]);
  currentDate = signal(new Date());
  cost = signal(2000);
  temperature = signal(25.3);
  pizza = signal({
    toppings: ['pepperoni', 'bacon'],
    size: 'large',
  });
  blueClass = signal(false);
  fontSize = signal(16);

  getName() {
    return this.name();
  }

  changeImage(e: KeyboardEvent) {
    this.imageURL.set((e.target as HTMLInputElement).value);
  }

  logImage(e: string) {
    console.log(e);
  }
}
