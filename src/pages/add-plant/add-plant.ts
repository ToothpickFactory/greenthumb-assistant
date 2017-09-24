import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ADD } from '../../reducers/plants';
import { Store } from '@ngrx/store';

let myPlant = {
  "id": "1qa2ws",
  "plantId": "sw23ed",
  "plotId": "i9u8",
  "name": "My 2nd plant",
  "width": 1,
  "height": 2,
  "x-coordinate": 1,
  "y-coordinate": 2
}

@Component({
  selector: 'page-add-plant',
  templateUrl: 'add-plant.html',
})
export class AddPlantPage {

  constructor(
    public viewCtrl: ViewController,
    private store: Store<any>,
  ) {

  }

  add(){
    this.store.dispatch({ type: ADD, payload: myPlant });
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {}

}


