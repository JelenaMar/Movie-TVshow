import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tvshow-desc',
  templateUrl: './tvshow-desc.component.html',
  styleUrls: ['./tvshow-desc.component.css']
})
export class TvshowDescComponent {
  
  @Input()
  tvshow:Object;

  
}
