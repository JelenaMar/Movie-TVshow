import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService} from '../service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;
  video: Object;
  
  constructor(
  	private _moviesServices: ServiceService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
  	this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesServices.getMovie(id).subscribe(movie => {
        this.movie = movie;
      });
    this._moviesServices.getMovieVideos(id).subscribe(res => {
        if(res.results && res.results.length) {
          this.video = res.results[0];        
          this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
        }
      });
   })
  }
}
