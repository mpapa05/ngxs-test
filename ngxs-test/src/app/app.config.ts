import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { provideStates } from '@ngxs/store';
import { TutorialState } from './state/tutorial.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(), 
    withNgxsReduxDevtoolsPlugin(),
    provideStates(
      [TutorialState], 
      withNgxsLoggerPlugin()
    ),
  ]
};
