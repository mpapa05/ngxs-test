import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';
import { FavoritesState } from '../../state/favorites.state';
import { RemoveFavorite } from '../../actions/favorites.actions';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
  // @Select(FavoritesState.getFavorites) favorites$!: Observable<any[]>;
  favorites$: Observable<any[]> = inject(Store).select(FavoritesState.getFavorites);

  constructor(private store: Store) { }

  removeFromFavorites(favorite: any) {
    this.store.dispatch(new RemoveFavorite(favorite));
  }

  ngOnInit() {}
}