import { Component, input } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-movie',
  imports: [],
  standalone: true,
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})
export class Movie {
  @input() movie: IMovie = {
    id: 0,
    title: '',
    plot: '',
    image: ''
  };
}
