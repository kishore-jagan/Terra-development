import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';

import { DropdownModule } from 'primeng/dropdown';
import { Button } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SplitButtonModule } from 'primeng/splitbutton';


interface Column {
    field: string;
    header: string;
}


@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [FormsModule, CommonModule, TableModule, MultiSelectModule, Button],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
  

})

export class ReportsComponent {

  toggleSearch() {
    const searchIcon = document.querySelector('.search-icon');
    searchIcon?.classList.toggle('open');
  }

  slectedOption: String = 'tide';

  selecteoption(typee: String) {
  this.slectedOption = typee;
  if(this.slectedOption == 'tide'){
    this.firstBuoys;
  }else if(this.slectedOption == 'adcp'){
    this.secondBuoys;
  }
  console.log(`selectedType : ${this.slectedOption}`);
  }
  
  selectedPeriod: string = 'dateRange';
  // dateOptions1 = ['Date Range', 'Weekly', 'Monthly', 'Yearly'];

  fromDate: Date | null = null;
  toDate: Date | null = null;
  selectedWeek: Date | null = null;
  selectedMonth: Date | null = null;
  selectedYear: Date | null = null;
  
  onPeriodChange() {
    console.log('Selected period:', this.selectedPeriod);
  }

    cols: Column[] = [];
    _selectedColumns: Column[] = [];
    
    constructor() {}
  
    ngOnInit(): void {
        this.cols = [
            {field: 'waterLevel', header: 'Water Level'},
            {field: 'surface', header: 'Surface'},
            {field: 'mid', header: 'Mid'},
            {field: 'low', header: 'Bottom'},
            
        ];

        this._selectedColumns = this.cols;
    }

    get selectedColumns(): Column[] {
        return this._selectedColumns;
    }

    set selectedColumns(val: Column[]) {
        this._selectedColumns = this.cols.filter((col) => val.includes(col));
    }

    firstBuoys = [
      { id: 1, staionName: "Buoy 1", date: "21/09/2024", time: "10:10", waterLevel: "0", surface: "5", mid: "8", low: "10" },
      { id: 2, staionName: "Buoy 1", date: "21/09/2024", time: "10:15", waterLevel: "11", surface: "4", mid: "7", low: "9" },
      { id: 3, staionName: "Buoy 1", date: "21/09/2024", time: "10:20", waterLevel: "13", surface: "6", mid: "9", low: "8" },
      { id: 4, staionName: "Buoy 1", date: "21/09/2024", time: "10:25", waterLevel: "14", surface: "7", mid: "10", low: "12" },
      { id: 5, staionName: "Buoy 1", date: "21/09/2024", time: "10:30", waterLevel: "15", surface: "6", mid: "11", low: "13" },
      { id: 6, staionName: "Buoy 1", date: "21/09/2024", time: "10:35", waterLevel: "16", surface: "8", mid: "12", low: "14" },
      { id: 7, staionName: "Buoy 1", date: "21/09/2024", time: "10:40", waterLevel: "17", surface: "9", mid: "13", low: "15" },
      { id: 8, staionName: "Buoy 1", date: "21/09/2024", time: "10:45", waterLevel: "18", surface: "10", mid: "14", low: "16" },
      { id: 9, staionName: "Buoy 1", date: "21/09/2024", time: "10:50", waterLevel: "19", surface: "11", mid: "15", low: "17" },
      { id: 10, staionName: "Buoy 1", date: "21/09/2024", time: "10:55", waterLevel: "20", surface: "12", mid: "16", low: "18" },
      { id: 11, staionName: "Buoy 1", date: "21/09/2024", time: "11:00", waterLevel: "21", surface: "13", mid: "17", low: "19" },
      { id: 12, staionName: "Buoy 1", date: "21/09/2024", time: "11:05", waterLevel: "22", surface: "14", mid: "18", low: "20" },
      { id: 13, staionName: "Buoy 1", date: "21/09/2024", time: "11:10", waterLevel: "23", surface: "15", mid: "19", low: "21" },
      { id: 14, staionName: "Buoy 1", date: "21/09/2024", time: "11:15", waterLevel: "24", surface: "16", mid: "20", low: "22" },
      { id: 15, staionName: "Buoy 1", date: "21/09/2024", time: "11:20", waterLevel: "25", surface: "17", mid: "21", low: "23" },
      { id: 16, staionName: "Buoy 1", date: "21/09/2024", time: "11:25", waterLevel: "26", surface: "18", mid: "22", low: "24" },
      { id: 17, staionName: "Buoy 1", date: "21/09/2024", time: "11:30", waterLevel: "27", surface: "19", mid: "23", low: "25" },
      { id: 18, staionName: "Buoy 1", date: "21/09/2024", time: "11:35", waterLevel: "28", surface: "20", mid: "24", low: "26" },
      { id: 19, staionName: "Buoy 1", date: "21/09/2024", time: "11:40", waterLevel: "29", surface: "21", mid: "25", low: "27" },
      { id: 20, staionName: "Buoy 1", date: "21/09/2024", time: "11:45", waterLevel: "30", surface: "22", mid: "26", low: "28" },
      { id: 21, staionName: "Buoy 1", date: "21/09/2024", time: "11:50", waterLevel: "31", surface: "23", mid: "27", low: "29" },
      { id: 22, staionName: "Buoy 1", date: "21/09/2024", time: "11:55", waterLevel: "32", surface: "24", mid: "28", low: "30" },
      { id: 23, staionName: "Buoy 1", date: "21/09/2024", time: "12:00", waterLevel: "33", surface: "25", mid: "29", low: "31" },
      { id: 24, staionName: "Buoy 1", date: "21/09/2024", time: "12:05", waterLevel: "34", surface: "26", mid: "30", low: "32" },
      { id: 25, staionName: "Buoy 1", date: "21/09/2024", time: "12:10", waterLevel: "35", surface: "27", mid: "31", low: "33" },
      { id: 26, staionName: "Buoy 1", date: "21/09/2024", time: "12:15", waterLevel: "36", surface: "28", mid: "32", low: "34" },
      { id: 27, staionName: "Buoy 1", date: "21/09/2024", time: "12:20", waterLevel: "37", surface: "29", mid: "33", low: "35" },
      { id: 28, staionName: "Buoy 1", date: "21/09/2024", time: "12:25", waterLevel: "38", surface: "30", mid: "34", low: "36" },
      { id: 29, staionName: "Buoy 1", date: "21/09/2024", time: "12:30", waterLevel: "39", surface: "31", mid: "35", low: "37" },
      { id: 30, staionName: "Buoy 1", date: "21/09/2024", time: "12:35", waterLevel: "40", surface: "32", mid: "36", low: "38" },
      { id: 31, staionName: "Buoy 1", date: "21/09/2024", time: "12:40", waterLevel: "41", surface: "33", mid: "37", low: "39" },
      { id: 32, staionName: "Buoy 1", date: "21/09/2024", time: "12:45", waterLevel: "42", surface: "34", mid: "38", low: "40" },
      { id: 33, staionName: "Buoy 1", date: "21/09/2024", time: "12:50", waterLevel: "43", surface: "35", mid: "39", low: "41" },
      { id: 34, staionName: "Buoy 1", date: "21/09/2024", time: "12:55", waterLevel: "44", surface: "36", mid: "40", low: "42" },
      { id: 35, staionName: "Buoy 1", date: "21/09/2024", time: "13:00", waterLevel: "45", surface: "37", mid: "41", low: "43" },
      { id: 36, staionName: "Buoy 1", date: "21/09/2024", time: "13:05", waterLevel: "46", surface: "38", mid: "42", low: "44" },
      { id: 37, staionName: "Buoy 1", date: "21/09/2024", time: "13:10", waterLevel: "47", surface: "39", mid: "43", low: "45" },
      { id: 38, staionName: "Buoy 1", date: "21/09/2024", time: "13:15", waterLevel: "48", surface: "40", mid: "44", low: "46" },
      { id: 39, staionName: "Buoy 1", date: "21/09/2024", time: "13:20", waterLevel: "49", surface: "41", mid: "45", low: "47" },
      { id: 40, staionName: "Buoy 1", date: "21/09/2024", time: "13:25", waterLevel: "50", surface: "42", mid: "46", low: "48" },
      { id: 41, staionName: "Buoy 1", date: "21/09/2024", time: "13:30", waterLevel: "51", surface: "43", mid: "47", low: "49" },
      { id: 42, staionName: "Buoy 1", date: "21/09/2024", time: "13:35", waterLevel: "52", surface: "44", mid: "48", low: "50" },
      { id: 43, staionName: "Buoy 1", date: "21/09/2024", time: "13:40", waterLevel: "53", surface: "45", mid: "49", low: "51" },
      { id: 44, staionName: "Buoy 1", date: "21/09/2024", time: "13:45", waterLevel: "54", surface: "46", mid: "50", low: "52" },
      { id: 45, staionName: "Buoy 1", date: "21/09/2024", time: "13:50", waterLevel: "55", surface: "47", mid: "51", low: "53" },
      { id: 46, staionName: "Buoy 1", date: "21/09/2024", time: "13:55", waterLevel: "56", surface: "48", mid: "52", low: "54" },
      { id: 47, staionName: "Buoy 1", date: "21/09/2024", time: "14:00", waterLevel: "57", surface: "49", mid: "53", low: "55" },
      { id: 48, staionName: "Buoy 1", date: "21/09/2024", time: "14:05", waterLevel: "58", surface: "50", mid: "54", low: "56" },
      { id: 49, staionName: "Buoy 1", date: "21/09/2024", time: "14:10", waterLevel: "59", surface: "51", mid: "55", low: "57" },
      { id: 50, staionName: "Buoy 1", date: "21/09/2024", time: "14:15", waterLevel: "60", surface: "52", mid: "56", low: "58" },
    ];
    secondBuoys = [
      { id: 1, staionName: "Buoy 2", date: "21/09/2024", time: "10:10", waterLevel: "12", surface: "22", mid: "15", low: "8" },
      { id: 2, staionName: "Buoy 2", date: "21/09/2024", time: "11:10", waterLevel: "14", surface: "24", mid: "16", low: "10" },
      { id: 3, staionName: "Buoy 2", date: "21/09/2024", time: "12:10", waterLevel: "15", surface: "25", mid: "17", low: "9" },
      { id: 4, staionName: "Buoy 2", date: "21/09/2024", time: "13:10", waterLevel: "13", surface: "23", mid: "14", low: "7" },
      { id: 5, staionName: "Buoy 2", date: "21/09/2024", time: "14:10", waterLevel: "12", surface: "20", mid: "12", low: "5" },
      { id: 6, staionName: "Buoy 2", date: "22/09/2024", time: "10:10", waterLevel: "18", surface: "30", mid: "25", low: "20" },
      { id: 7, staionName: "Buoy 2", date: "22/09/2024", time: "11:10", waterLevel: "17", surface: "28", mid: "22", low: "18" },
      { id: 8, staionName: "Buoy 2", date: "22/09/2024", time: "12:10", waterLevel: "19", surface: "32", mid: "27", low: "21" },
      { id: 9, staionName: "Buoy 2", date: "22/09/2024", time: "13:10", waterLevel: "16", surface: "26", mid: "23", low: "19" },
      { id: 10, staionName: "Buoy 2", date: "22/09/2024", time: "14:10", waterLevel: "14", surface: "24", mid: "20", low: "16" },
      { id: 11, staionName: "Buoy 2", date: "23/09/2024", time: "10:10", waterLevel: "20", surface: "35", mid: "30", low: "25" },
      { id: 12, staionName: "Buoy 2", date: "23/09/2024", time: "11:10", waterLevel: "19", surface: "33", mid: "28", low: "22" },
      { id: 13, staionName: "Buoy 2", date: "23/09/2024", time: "12:10", waterLevel: "21", surface: "37", mid: "31", low: "27" },
      { id: 14, staionName: "Buoy 2", date: "23/09/2024", time: "13:10", waterLevel: "15", surface: "29", mid: "24", low: "18" },
      { id: 15, staionName: "Buoy 2", date: "23/09/2024", time: "14:10", waterLevel: "17", surface: "31", mid: "26", low: "20" },
      { id: 16, staionName: "Buoy 2", date: "24/09/2024", time: "10:10", waterLevel: "22", surface: "40", mid: "35", low: "30" },
      { id: 17, staionName: "Buoy 2", date: "24/09/2024", time: "11:10", waterLevel: "20", surface: "38", mid: "32", low: "28" },
      { id: 18, staionName: "Buoy 2", date: "24/09/2024", time: "12:10", waterLevel: "23", surface: "41", mid: "36", low: "31" },
      { id: 19, staionName: "Buoy 2", date: "24/09/2024", time: "13:10", waterLevel: "19", surface: "36", mid: "33", low: "29" },
      { id: 20, staionName: "Buoy 2", date: "24/09/2024", time: "14:10", waterLevel: "21", surface: "39", mid: "34", low: "26" },
      { id: 21, staionName: "Buoy 2", date: "25/09/2024", time: "10:10", waterLevel: "24", surface: "42", mid: "37", low: "32" },
      { id: 22, staionName: "Buoy 2", date: "25/09/2024", time: "11:10", waterLevel: "22", surface: "41", mid: "35", low: "30" },
      { id: 23, staionName: "Buoy 2", date: "25/09/2024", time: "12:10", waterLevel: "25", surface: "43", mid: "38", low: "33" },
      { id: 24, staionName: "Buoy 2", date: "25/09/2024", time: "13:10", waterLevel: "20", surface: "40", mid: "36", low: "29" },
      { id: 25, staionName: "Buoy 2", date: "25/09/2024", time: "14:10", waterLevel: "23", surface: "41", mid: "37", low: "28" },
      { id: 26, staionName: "Buoy 2", date: "26/09/2024", time: "10:10", waterLevel: "26", surface: "45", mid: "39", low: "32" },
      { id: 27, staionName: "Buoy 2", date: "26/09/2024", time: "11:10", waterLevel: "27", surface: "47", mid: "41", low: "34" },
      { id: 28, staionName: "Buoy 2", date: "26/09/2024", time: "12:10", waterLevel: "25", surface: "46", mid: "40", low: "30" },
      { id: 29, staionName: "Buoy 2", date: "26/09/2024", time: "13:10", waterLevel: "28", surface: "48", mid: "42", low: "31" },
      { id: 30, staionName: "Buoy 2", date: "26/09/2024", time: "14:10", waterLevel: "30", surface: "49", mid: "44", low: "35" },
      { id: 31, staionName: "Buoy 2", date: "27/09/2024", time: "10:10", waterLevel: "32", surface: "50", mid: "46", low: "37" },
      { id: 32, staionName: "Buoy 2", date: "27/09/2024", time: "11:10", waterLevel: "31", surface: "51", mid: "47", low: "38" },
      { id: 33, staionName: "Buoy 2", date: "27/09/2024", time: "12:10", waterLevel: "34", surface: "52", mid: "49", low: "40" },
      { id: 34, staionName: "Buoy 2", date: "27/09/2024", time: "13:10", waterLevel: "33", surface: "54", mid: "48", low: "39" },
      { id: 35, staionName: "Buoy 2", date: "27/09/2024", time: "14:10", waterLevel: "36", surface: "55", mid: "50", low: "41" },
      { id: 36, staionName: "Buoy 2", date: "28/09/2024", time: "10:10", waterLevel: "38", surface: "57", mid: "52", low: "42" },
      { id: 37, staionName: "Buoy 2", date: "28/09/2024", time: "11:10", waterLevel: "39", surface: "59", mid: "53", low: "43" },
      { id: 38, staionName: "Buoy 2", date: "28/09/2024", time: "12:10", waterLevel: "37", surface: "58", mid: "51", low: "40" },
      { id: 39, staionName: "Buoy 2", date: "28/09/2024", time: "13:10", waterLevel: "40", surface: "60", mid: "54", low: "44" },
      { id: 40, staionName: "Buoy 2", date: "28/09/2024", time: "14:10", waterLevel: "42", surface: "61", mid: "56", low: "45" },
      { id: 41, staionName: "Buoy 2", date: "29/09/2024", time: "10:10", waterLevel: "44", surface: "63", mid: "58", low: "46" },
      { id: 42, staionName: "Buoy 2", date: "29/09/2024", time: "11:10", waterLevel: "45", surface: "64", mid: "59", low: "47" },
      { id: 43, staionName: "Buoy 2", date: "29/09/2024", time: "12:10", waterLevel: "46", surface: "65", mid: "60", low: "48" },
      { id: 44, staionName: "Buoy 2", date: "29/09/2024", time: "13:10", waterLevel: "47", surface: "67", mid: "62", low: "50" },
      { id: 45, staionName: "Buoy 2", date: "29/09/2024", time: "14:10", waterLevel: "49", surface: "68", mid: "63", low: "52" },
      { id: 46, staionName: "Buoy 2", date: "30/09/2024", time: "10:10", waterLevel: "50", surface: "70", mid: "65", low: "53" },
      { id: 47, staionName: "Buoy 2", date: "30/09/2024", time: "11:10", waterLevel: "52", surface: "72", mid: "67", low: "54" },
      { id: 48, staionName: "Buoy 2", date: "30/09/2024", time: "12:10", waterLevel: "54", surface: "74", mid: "68", low: "56" },
      { id: 49, staionName: "Buoy 2", date: "30/09/2024", time: "13:10", waterLevel: "53", surface: "75", mid: "69", low: "55" },
      { id: 50, staionName: "Buoy 2", date: "30/09/2024", time: "14:10", waterLevel: "56", surface: "76", mid: "71", low: "57" }
  ];

      loading: boolean = false;

    exportCSV(dt2: any) {
        dt2.exportCSV();
    }
    }
  


