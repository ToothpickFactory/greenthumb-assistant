import { Component, Input, ViewChild } from '@angular/core';
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
  @Input() plants: Array<any>;
  @ViewChild(GridsterComponent) gridster: GridsterComponent;

  itemOptions = {
      maxWidth: 3,
      maxHeight: 3
  };

  gridsterOptions: IGridsterOptions = {
      // core configuration is default one - for smallest view. It has hidden minWidth: 0.
      lanes: 2,                 // amount of lanes (cells) in the grid
      direction: 'vertical',    // floating top - vertical, left - horizontal
      dragAndDrop: true,        // enable/disable drag and drop for all items in grid
      resizable: true,          // enable/disable resizing by drag and drop for all items in grid
      widthHeightRatio: 1,      // proportion between item width and height
      shrink: true
  };

  gridsterDraggableOptions: IGridsterDraggableOptions = {
      handlerClass: 'panel-heading'
  };

  constructor() {
    console.log('Hello PlotComponent Component');
  }

  ngOnInit() {
    console.log('plants', this.plants);
  }

  over(ev) {
    console.log('over(', ev, ')');
  }

  out(ev) {
    console.log('out(', ev, ')');
  }

  itemChange(ev) {
    console.log('itemChange(', ev, ')');
  }

  remove($event, index: number, gridster: GridsterComponent) {
    $event.preventDefault();
    this.plants.splice(index, 1);
    console.log('plant remove', index);
  }
}
