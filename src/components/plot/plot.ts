import { Component } from '@angular/core';
import { GridsterComponent } from 'angular2gridster';
import { IGridsterDraggableOptions } from 'angular2gridster';
import { IGridsterOptions } from 'angular2gridster';

/**
 * Generated class for the PlotComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'plot',
  templateUrl: 'plot.html'
})
export class PlotComponent {

  text: string;

  constructor() {
    console.log('Hello PlotComponent Component');
    this.text = 'Plot Component';
  }

}
