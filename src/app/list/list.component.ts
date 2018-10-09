import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../Character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() characters: Character[];

  constructor() { }

  ngOnInit() {
  }

}
