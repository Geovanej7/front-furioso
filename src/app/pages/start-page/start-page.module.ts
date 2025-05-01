import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    CommonModule,
    StartComponent 
  ],
  exports: [StartComponent]
})
export class StartPageModule {}
