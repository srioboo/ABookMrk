import { Component, OnInit } from '@angular/core';
import { BOOKMARKS } from '../mock-bookmark';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bkmark = BOOKMARKS;

  constructor() { }

  ngOnInit() {
  }

}
