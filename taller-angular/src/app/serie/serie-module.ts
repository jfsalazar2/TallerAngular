import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieList } from './serie-list/serie-list';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SerieList,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],

  exports: [
    SerieList
  ]
})
export class SerieModule { }
