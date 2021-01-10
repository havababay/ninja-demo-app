import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-details-clean-persentation',
  templateUrl: './show-details-clean-persentation.component.html',
  styleUrls: ['./show-details-clean-persentation.component.css']
})
export class ShowDetailsCleanPersentationComponent implements OnInit {
  @Input() show: any;

  constructor() { }

  ngOnInit() {
  }

}