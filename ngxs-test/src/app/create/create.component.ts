import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from './../actions/tutorials.actions';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  constructor(private store: Store) { }

  addTutorial(name: string, url: string) {
    this.store.dispatch(new AddTutorial({ name, url }));
  }

  ngOnInit() {}
}
