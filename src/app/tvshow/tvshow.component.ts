import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
  tvshow: object;

  constructor(
  	private _moviseService: ServiceService,
  	private router: ActivatedRoute ) { }


  ngOnInit() {
  	this.router.params.subscribe((params) => {
  		const id = params['id'];
  		this._moviseService.getTVShowDetails(id).subscribe(tvshow => {
  			this.tvshow = tvshow;
  		})
  	});
  }

}
