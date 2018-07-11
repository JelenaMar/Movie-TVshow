import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService} from '../service.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;

  constructor(
  	private _moviesServices: ServiceService,
    private router: ActivatedRoute) { }

  ngOnInit() {
  	this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesServices.getMovie(id).subscribe(movie => {
        this.movie = movie;
      });
      
  })
  
}
}
