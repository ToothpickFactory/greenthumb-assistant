import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-add-plant',
  templateUrl: 'add-plant.html',
})
export class AddPlantPage {

  constructor( public viewCtrl: ViewController ) {}

  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

  ionViewDidLoad() {}

}
