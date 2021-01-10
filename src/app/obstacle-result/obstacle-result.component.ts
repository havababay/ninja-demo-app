import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-obstacle-result',
  templateUrl: './obstacle-result.component.html',
  styleUrls: ['./obstacle-result.component.css']
})
export class ObstacleResultComponent implements OnInit {
  @Input() obstacle: any;

  constructor() { }

  ngOnInit() {
  }

}