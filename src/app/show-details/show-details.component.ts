import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { candidates } from '../data/candidates';
import { obstacles } from '../data/obstacles';
import { shows } from '../data/shows';
import { showResultsCollection } from '../data/show-results';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  show;
  showResults;
  
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
  }

  getCandidate(candidateId: any):any {
    return candidates.find(candidate => {
      return candidate.id === Number(candidateId);
    });
  }

  getObstacle(obstacleId: any):any {
    return obstacles.find(obstacle => {
      return obstacle.id === Number(obstacleId);
    });
  }
}