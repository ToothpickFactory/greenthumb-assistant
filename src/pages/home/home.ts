import { Component, ViewChild } from '@angular/core';
import { DECREMENT, INCREMENT, RESET } from '../../reducers/counter';
import { ModalController, NavController } from 'ionic-angular';

import { AddPlantPage } from '../add-plant/add-plant';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

interface AppState {
  counter: number;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  counter: Observable<number>;

  constructor(
    public navCtrl: NavController,
    private store: Store<AppState>,
    public modalCtrl: ModalController
  ) {
    this.counter = store.select('counter');
  }

  presentAddPlantModal() {
    let addPlantModal = this.modalCtrl.create(AddPlantPage, { userId: 8675309 });

    addPlantModal.onDidDismiss(data => {
      console.log(data);
    });

    addPlantModal.present();
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
