import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Tutorial } from '../models/tutorial.model';
import { TutorialState } from '../state/tutorial.state';
import { Observable } from 'rxjs';
import { RemoveTutorial } from '../actions/tutorials.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-read',
  imports: [CommonModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss'
})
export class ReadComponent implements OnInit {
  // tutorials$: Observable<Tutorial[]>;
  tutorials$: Observable<Tutorial[]> = inject(Store).select(TutorialState.getTutorials);

  constructor(private store: Store) {
  // this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }

  delTurotial(name: string) {
    this.store.dispatch(new RemoveTutorial(name));
  }

  ngOnInit() {}

}
