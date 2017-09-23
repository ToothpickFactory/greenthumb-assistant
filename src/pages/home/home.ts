import { Component, ViewChild } from '@angular/core';
import { DECREMENT, INCREMENT, RESET } from '../../reducers/counter';
import { ModalController, NavController } from 'ionic-angular';

import { AddPlantPage } from '../add-plant/add-plant';
import { LOAD } from '../../reducers/plants';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import myPlants from '../../dummy/my-plants';

interface AppState {
  counter: number;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  plants: Observable<number>;

  constructor(
    public navCtrl: NavController,
    private store: Store<AppState>,
    public modalCtrl: ModalController
  ) {
    this.plants = store.select('plants');
    this.store.dispatch({ type: LOAD, payload: myPlants });
  }

  presentAddPlantModal() {
    let addPlantModal = this.modalCtrl.create(AddPlantPage, { userId: 8675309 });

    addPlantModal.onDidDismiss(data => {
      console.log(data);
    });

    addPlantModal.present();
  }

}
