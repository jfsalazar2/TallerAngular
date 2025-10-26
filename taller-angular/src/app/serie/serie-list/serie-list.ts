import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';     // << si luego quieres HTTP
import { dataSeries } from '../dataSeries';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.html',
  styleUrls: ['./serie-list.css'],
})
export class SerieList implements OnInit {
  series: Array<Serie> = [];
  avgSeasons = 0;
  selectedSerie: Serie | null = null;

  
  constructor() {}

  private computeAverage(): void {
    const nums = this.series.map(s => Number(s.seasons) || 0);
    const total = nums.reduce((a, b) => a + b, 0);
    this.avgSeasons = nums.length ? total / nums.length : 0;
  }

  
  private getSeriesList(): Array<Serie> {
    return dataSeries;
  }

  onSelect(s: Serie): void {
    this.selectedSerie = s;
  }

  trackById(_: number, s: Serie) { return s.id; }

  ngOnInit() {
    
    this.series = this.getSeriesList();
    this.computeAverage();
    this.selectedSerie = this.series[0] ?? null;

    
  }
}



  





