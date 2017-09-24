import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridsterModule } from 'angular2gridster';
import { PlotComponent } from './plot/plot';

@NgModule({
	declarations: [PlotComponent],
	imports: [
    BrowserModule,
    GridsterModule
  ],
	exports: [PlotComponent]
})
export class ComponentsModule {}
