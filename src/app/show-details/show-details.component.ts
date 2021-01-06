import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { shows } from '../data/shows';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  show;
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  // First get the product id from the current route.
  const showIdFromRoute = this.route.snapshot.paramMap.get('showId');
  // Find the product that correspond with the id provided in route.
  this.show = shows.find(show => {
    return show.id === Number(showIdFromRoute);
  });
  }
}