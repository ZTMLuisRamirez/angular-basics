import { Component, signal } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  // template: `<p>Hello world!</p>`,
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PostComponent],
  // styles: ['']
})
export class AppComponent {
  name = signal('Luis');
  imageURL = signal('https://picsum.photos/id/237/500/500');

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
