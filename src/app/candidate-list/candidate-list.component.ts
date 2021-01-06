import { Component, OnInit } from '@angular/core';

import { candidates } from '../data/candidates';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates = candidates;
  
  constructor() { }

  ngOnInit() {
  }

}