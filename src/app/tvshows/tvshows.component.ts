import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'


@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {
  tvshows: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private _moviseService: ServiceService) { 
    this._moviseService.getTopRatedTVShows().subscribe(res => {
    	this.tvshows = res.results.slice(0,10);
    });
}

  ngOnInit() {
  }
  searchTVShows(){
    this._moviseService.searchTVShows(this.searchStr).subscribe(res => {
      this.searchRes = res.results.slice(0,10);
    })
  }
}
