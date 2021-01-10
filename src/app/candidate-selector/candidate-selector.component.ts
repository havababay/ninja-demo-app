import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-selector',
  templateUrl: './candidate-selector.component.html',
  styleUrls: ['./candidate-selector.component.css']
})
export class CandidateSelectorComponent implements OnInit {
  @Input() candidates: any;

  constructor() { }

  ngOnInit() {
  }

}