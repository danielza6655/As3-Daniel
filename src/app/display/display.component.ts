import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  standalone: true,
  imports: [CommonModule, BaseChartDirective]
})
export class DisplayComponent implements OnInit {
  data: any;
  chartData: ChartData<'bar', (number | [number, number] | null)[], string> = {
    datasets: [],
    labels: []
  };
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Categories',
          font: {
            size: 14,
            weight: 'bold'
          },
          color: '#333'
        },
        ticks: {
          color: '#333',
          font: {
            size: 12
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Values',
          font: {
            size: 14,
            weight: 'bold'
          },
          color: '#333'
        },
        ticks: {
          color: '#333',
          font: {
            size: 12
          }
        },
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#333',
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff'
      }
    }
  };
  chartType: ChartType = 'bar';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentData.subscribe(data => {
      this.data = data;
      if (data) {
        this.chartData = {
          datasets: [
            {
              data: data.data.map((item: any) => item.value),
              label: data.name,
              backgroundColor: 'rgba(144, 238, 144, 0.7)',
              borderColor: 'rgba(144, 238, 144, 1)',
              borderWidth: 1
            }
          ],
          labels: data.data.map((item: any) => item.label)
        };
      }
    });
  }
}
