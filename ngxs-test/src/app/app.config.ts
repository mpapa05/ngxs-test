import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { provideStates } from '@ngxs/store';
import { TutorialState } from './state/tutorial.state';
import { FavoritesState } from './state/favorites.state';
import { provideHttpClient } from '@angular/common/http';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(
      [TutorialState, FavoritesState],
      withNgxsStoragePlugin(
        {
          keys: ['tutorials', 'favorites'] // Megadod, hogy mely state-et szeretnéd tárolni
        }
      )
    ), 
    withNgxsReduxDevtoolsPlugin(),
    // provideNgxsStoragePlugin({
    //   keys: ['favorites'] // Megadod, hogy mely state-et szeretnéd tárolni
    // }),
    provideStates(
      [TutorialState, FavoritesState], 
      withNgxsLoggerPlugin()
    ),
  ]
};


