import { Component, OnInit } from '@angular/core';
import { shows } from '../data/shows';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  shows = shows;

  constructor() { }

  ngOnInit() {
  }

}