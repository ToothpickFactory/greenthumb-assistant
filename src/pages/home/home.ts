import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { LOAD } from '../../reducers/plants';
import { AddPlantPage } from '../add-plant/add-plant';

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
