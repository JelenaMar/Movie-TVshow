import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-desc',
  templateUrl: './movie-desc.component.html',
  styleUrls: ['./movie-desc.component.css']
})
export class MovieDescComponent {

  @Input()
  movie:Object;
}
