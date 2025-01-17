import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TmdbService } from '../../services/tmdb.service';
import { CommonModule } from '@angular/common';
import { AddFavorite } from '../../actions/favorites.actions';

@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private tmdbService: TmdbService, private store: Store) { }

  ngOnInit() {
    this.tmdbService.getMovies().subscribe(data => {
      this.movies = data.results;
    });
  }

  addToFavorites(movie: any) {
    this.store.dispatch(new AddFavorite(movie));
  }
}