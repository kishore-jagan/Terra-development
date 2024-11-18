import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
// Chart Options Type Interface
import { AgChartOptions } from 'ag-charts-community';
import Chart from 'chart.js/auto';
import { NgxGaugeModule } from 'ngx-gauge';

import { MenuItem, MessageService } from 'primeng/api';
import { TerminalModule } from 'primeng/terminal';
import { TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';
import { DockModule } from 'primeng/dock';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TreeModule } from 'primeng/tree';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule,AnimateOnScrollModule,RadioButtonModule,DockModule, MenubarModule, ToastModule, DialogModule, TreeModule, TerminalModule, GalleriaModule,AgCharts, NgxGaugeModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [MessageService, TerminalService]
})
export class DashboardComponent implements OnInit {

  items: MenuItem[] | undefined;

  position: 'bottom' | 'top' | 'left' | 'right' = 'bottom'; 
    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
            },
            {
                label: 'App Store',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
            },
            {
                label: 'Photos',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
            },
            {
                label: 'Trash',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
            }
        ];
    }
};

  // chartOptions: any; //

  // ngAfterViewInit() {
  //   this.loadBatteryChart();
  // }
  // public chartOptions: AgChartOptions;
  // constructor() {
  //   this.chartOptions = {
  //     // Data: Data to be displayed in the chart
  //     data: [
  //       { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
  //       { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
  //       { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
  //       { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
  //       { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
  //       { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
  //     ],
  //     // Series: Defines which chart type and data to use
  //     series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }]
  //   };
  // }

  // loadBatteryChart() {
  //   const canvas = document.getElementById('batteryChart') as HTMLCanvasElement;
  //   const ctx = canvas.getContext('2d');

  //   if (ctx) { // Null check for CanvasRenderingContext2D
  //     new Chart(ctx, {
  //       type: 'line',
  //       data: {
  //         labels: Array.from({ length: 60 }, (_, i) => i.toString()), // 60 data points
  //         datasets: [
  //           {
  //             label: 'Battery',
  //             data: [80, 85, 82, 80, 78, 85, 82, 80, 81, 79, 83, 82], // Your battery data here
  //             borderColor: '#fdbf5b',
  //             fill: false,
  //           },
  //         ],
  //       },
  //       options: {
  //         responsive: true,
  //         scales: {
  //           x: {
  //             display: true,
  //             title: {
  //               display: true,
  //               text: 'Time (minutes)',
  //               color: '#fff',
  //             },
  //           },
  //           y: {
  //             display: true,
  //             title: {
  //               display: true,
  //               text: 'Battery Level (%)',
  //               color: '#fff',
  //             },
  //           },
  //         },
  //       },
  //     });
  //   } else {
  //     console.error('Could not get 2D context for canvas element.');
  //   }
  // }
