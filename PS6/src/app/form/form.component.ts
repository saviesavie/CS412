import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Music} from '../data/Music';
import {SongService} from '../service/song.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  artistName: string;
  trackName: string;
  primaryGenreName: string;
  releaseDate: string;

  music: Music[] = [];
  searchedArtist = {
    artistName: '',
    trackName: '',
    primaryGenreName: '',
    releaseDate: ''
  };

  ngOnInit(): void {
  }

  getSongs(): void {
    this.SongService.getSong(this.artistName).subscribe(
      (response: Music) => {
        this.searchedArtist = {
          artistName: this.artistName,
          trackName: this.trackName,
          primaryGenreName: this.primaryGenreName,
          releaseDate: this.releaseDate
        };
      }
    );
  }

}
