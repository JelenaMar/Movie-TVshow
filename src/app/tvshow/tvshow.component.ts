import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService} from '../service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
  tvshow: Object;
  video: Object;
  
  constructor(
    private _moviesServices: ServiceService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesServices.getTVShowDetails(id).subscribe(movie => {
        this.tvshow = movie;
      });
    this._moviesServices.getTvShowVideos(id).subscribe(res => {
        if(res.results && res.results.length) {
          this.video = res.results[0];        
          this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
        }
      });
   })
  }
}
