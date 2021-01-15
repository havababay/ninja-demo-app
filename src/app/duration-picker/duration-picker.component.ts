import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-duration-picker',
  templateUrl: './duration-picker.component.html',
  styleUrls: ['./duration-picker.component.css']
})
export class DurationPickerComponent implements OnInit {
  @Input() duration:string;
  @Input() label:string;

  constructor() { }

  ngOnInit() {
  }

}