import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { candidates } from '../data/candidates';
import { obstacles } from '../data/obstacles';
import { shows } from '../data/shows';
import { showResultsCollection } from '../data/show-results';

@Component({
  selector: 'app-show-details-clean',
  templateUrl: './show-details-clean.component.html',
  styleUrls: ['./show-details-clean.component.css']
})
export class ShowDetailsCleanComponent implements OnInit {
  show;
  showResults;
  showCandidates;
  showObstacles;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const showIdFromRoute = this.route.snapshot.paramMap.get('showId');

    this.show = shows.find(show => {
      return show.id === Number(showIdFromRoute);
    });

    this.showResults = showResultsCollection.find(showResults => {
      return showResults.show === Number(showIdFromRoute);
    });

    this.showCandidates = candidates.filter(candidate => this.show.candidates.includes(candidate.id));

    this.showObstacles = obstacles.filter(obstacle => this.show.obstacles.includes(obstacle.id));
  }
}