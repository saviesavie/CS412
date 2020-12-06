import { Component, OnInit } from '@angular/core';
import {tracks} from '../data/musicData';
import {Music} from '../data/Music';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tracks: Music[] = tracks;
  track: Music;
  selectedTrack: Music;
  isClicked: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  setSelectedMusic(track: Music): void {
    this.selectedTrack = track;
  }

  // clickButton() {
  //   if (this.isClicked === true) {
  //     this.selectedTrack = {
  //       trackName: 'AHHH',
  //       artistName: 'N/A',
  //       releaseDate: 'N/A',
  //       primaryGenreName: 'N/A'
  //     };
  //   } else {
  //     this.selectedTrack = {
  //       trackName: 'N/A',
  //       artistName: 'N/A',
  //       releaseDate: 'N/A',
  //       primaryGenreName: 'N/A',
  //     };
  //   }
  //   this.isClicked = true;
  // }
}

