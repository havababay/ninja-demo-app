import { Component, OnInit } from '@angular/core';
import { candidates } from '../data/candidates';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  candidate;
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  // First get the product id from the current route.
  const candidateIdFromRoute = this.route.snapshot.paramMap.get('candidateId');
  // Find the product that correspond with the id provided in route.
  this.candidate = candidates.find(candidate => {
    return candidate.id === Number(candidateIdFromRoute);
  });
  }
}