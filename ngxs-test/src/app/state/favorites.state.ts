import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddFavorite, RemoveFavorite } from '../actions/favorites.actions';

export class FavoritesStateModel {
  favorites: any[] = [];
}

@State<FavoritesStateModel>({
  name: 'favorites',
  defaults: {
    favorites: []
  }
})
export class FavoritesState {

  @Selector()
  static getFavorites(state: FavoritesStateModel) {
    console.log('state.favorites', state.favorites);
    return state.favorites;
  }

  @Action(AddFavorite)
  addFavorite({ getState, patchState }: StateContext<FavoritesStateModel>, { payload }: AddFavorite) {
    const state = getState();
    patchState({
      favorites: [...state.favorites, payload]
    });
  }

  @Action(RemoveFavorite)
  removeFavorite({ getState, patchState }: StateContext<FavoritesStateModel>, { payload }: RemoveFavorite) {
    patchState({
      favorites: getState().favorites.filter(item => item.id !== payload.id)
    });
  }
}