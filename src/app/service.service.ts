import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import { map } from 'rxjs/operators'; 

@Injectable ()
export class ServiceService {
	apikey: string

	constructor(private _jsonp:Jsonp){
		this.apikey = 'c9e3ae2993bc6c62de85e0db3fecb02f';
	}
	getTopRatedMovies(){
		var search = new URLSearchParams ();
		search.set('sort_by','popularity.desc');
		search.set('api_key',this.apikey);
		return this._jsonp.get('https://api.themoviedb.org/3/movie/top_rated?callback=JSONP_CALLBACK',{search}).pipe(map(res => { return res.json();
		})
	  );
	}

	searchMovies(searchStr:string) {
		var search = new URLSearchParams();
		search.set('sort_by','popularity.desc');
		search.set('query',searchStr);
		search.set('api_key',this.apikey);
		return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK', {search}).pipe(map(res => {return res.json();
	    })
	    );		
	}

	getMovie(id:string) {
		var search = new URLSearchParams();
		search.set('api_key',this.apikey);
		return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'?callback=JSONP_CALLBACK', {search}).pipe(map(res => {return  res.json();
		})
		);
	}


	getTopRatedTVShows(){
		var search = new URLSearchParams();
		search.set('api_key',this.apikey);
		return this._jsonp.get('https://api.themoviedb.org/3/tv/top_rated?callback=JSONP_CALLBACK', {search}).pipe(map(res => {return res.json();
		})
		);
	}

	getTVShowDetails(id:string) {
		var search = new URLSearchParams();
		search.set('api_key',this.apikey);
		return this._jsonp.get('https://api.themoviedb.org/3/tv/'+ id +'?callback=JSONP_CALLBACK', {search}).pipe(map(res => { return res.json();
		})
		);
	}


  searchTVShows(searchStr:string) {
		var search = new URLSearchParams();
		search.set('sort_by','popularity.desc');
		search.set('query',searchStr);
		search.set('api_key',this.apikey);
		return this._jsonp.get('https://api.themoviedb.org/3/search/tv?callback=JSONP_CALLBACK', {search}).pipe(map(res => {
	    return res.json();
	    })
	    );		
	}
	getMovieVideos(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+ id +'/videos?callback=JSONP_CALLBACK', {search}).pipe(map(res => {
        return res.json();
      })
      );

  }
  getTvShowVideos(id:string) {
    var search = new URLSearchParams();
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/tv/'+ id +'/videos?callback=JSONP_CALLBACK', {search}).pipe(map(res => {
        return res.json();
      })
      );
}
}

