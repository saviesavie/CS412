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

  selectedArtist = {
    artistName: '',
    trackName: '',
    primaryGenreName: '',
    releaseDate: ''
  };
  artistName: string;
  trackName: string;
  primaryGenreName: string;
  releaseDate: string;

  music: Music[] = [];

  ngOnInit(): void {
  }

  getTracks(): void {
    this.SongService.getSong(this.artistName).subscribe(
      (response: Music) => {
        this.selectedArtist = {
          artistName: this.artistName,
          trackName: response.trackName,
          primaryGenreName: response.primaryGenreName,
          releaseDate: response.releaseDate
        };
      }
    );
  }

}
