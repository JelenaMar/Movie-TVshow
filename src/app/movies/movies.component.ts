import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  popular: Array<Object>;
	searchRes: Array<Object>;
	searchStr: string;

  constructor(private _moviseService: ServiceService) {
     this._moviseService.getTopRatedMovies().subscribe(res => {
     	this.popular = res.results.slice(0,10);
     });
 }

  ngOnInit() {
  }
  searchMovies(){
  	this._moviseService.searchMovies(this.searchStr).subscribe(res => {
  		this.searchRes = res.results.slice(0,10);
  	})
  }
}
