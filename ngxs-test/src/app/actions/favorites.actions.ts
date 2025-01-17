import { Favorites } from '../models/favorites.model';

export class AddFavorite {
    static readonly type = '[Favorites] Add';
    constructor(public payload: any) {}
}
  
export class RemoveFavorite {
    static readonly type = '[Favorites] Remove';
    constructor(public payload: any) {}
}