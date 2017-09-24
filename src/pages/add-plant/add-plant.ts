import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ADD } from '../../reducers/plants';
import { Store } from '@ngrx/store';

import plantsListDummy  from '../../dummy/plants-list';

@Component({
  selector: 'page-add-plant',
  templateUrl: 'add-plant.html',
})
export class AddPlantPage {
  plantsList: Array<any> = plantsListDummy;

  constructor(
    public viewCtrl: ViewController,
    private store: Store<any>,
  ) {}

  add(selectedPlant){
    this.store.dispatch({ type: ADD, payload: selectedPlant });
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {}

}


