import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class SelectionComponent implements OnInit {
  datasets: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      this.datasets = data.datasets;
    });
  }

  onDatasetChange(dataset: any) {
    this.dataService.changeData(dataset);
  }
}
