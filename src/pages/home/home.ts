import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../../reducers/counter';

interface AppState {
  counter: number;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  counter: Observable<number>;

  constructor(public navCtrl: NavController, private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }

}
