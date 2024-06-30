import {
  Component,
  input,
  output,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  postImage = input.required<string>();
  imageSelected = output<string>();

  constructor() {
    console.log('constructor()');
  }

  ngOnInit() {
    console.log('ngOnInit() called', this.postImage());
  }

  ngOnChanges() {
    console.log('ngOnChanges() called');
  }

  ngDoCheck() {
    console.log('ngDoCheck() called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy() called');
  }
}
