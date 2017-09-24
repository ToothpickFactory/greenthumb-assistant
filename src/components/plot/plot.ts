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
      maxWidth: 2,
      maxHeight: 2
  };

  gridsterOptions:IGridsterOptions = {
    lanes: 2, // how many lines (grid cells) dashboard has
    direction: 'vertical', // items floating direction: vertical/horizontal
    dragAndDrop: true, // possible to change items position by drag n drop
    resizable: true // possible to resize items by drag n drop by item edge/corner
  };

  gridsterDraggableOptions: IGridsterDraggableOptions = {
      handlerClass: 'draggable'
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

  itemChange(ev, gardenPlot) {
    console.log('itemChange(', ev, gardenPlot, ')');
  }

  remove($event, index: number, gridster: GridsterComponent) {
    $event.preventDefault();
    this.plants.splice(index, 1);
    console.log('plant remove', index);
  }

  optionsChange(ev) {
    console.log('optionsChange(', ev, ')');
  }
}
