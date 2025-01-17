import { Component } from '@angular/core';
// import { ReadComponent } from './read/read.component';
// import { CreateComponent } from './create/create.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ 
    // ReadComponent, 
    // CreateComponent, 
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngxs-test';
}
