import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  imports: [FormsModule, CommonModule, TableModule, MultiSelectModule, DropdownModule, Button, InputIconModule, IconFieldModule, MatSidenavModule, ToolbarModule, AvatarModule, SplitButtonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',

})

export class ReportsComponent implements OnInit {

    cols: Column[] = [];
    _selectedColumns: Column[] = [];
    
    constructor() {}
  
    ngOnInit(): void {
        this.cols = [
            {field: 'temperature', header: 'Temperature'},
            {field: 'waterLevel', header: 'Water Level'},
        ];

        this._selectedColumns = this.cols;
    }

    get selectedColumns(): Column[] {
        return this._selectedColumns;
    }

    set selectedColumns(val: Column[]) {
        this._selectedColumns = this.cols.filter((col) => val.includes(col));
    }

  firstBuoys = [  {	id:	1	, staionName:	"Buoy 1"	, date:	"21/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"10"	},
    {	id:	2	, staionName:	"Buoy 1"	, date:	"21/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"9"	},
    {	id:	3	, staionName:	"Buoy 1"	, date:	"21/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"8"	},
    {	id:	4	, staionName:	"Buoy 1"	, date:	"22/09/2024"	,time:	"11:10"	,waterLevel:	"42"	,temperature:	"0"	},
    {	id:	5	, staionName:	"Buoy 1"	, date:	"22/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"35"	},
    {	id:	6	, staionName:	"Buoy 1"	, date:	"23/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
    {	id:	7	, staionName:	"Buoy 1"	, date:	"23/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
    {	id:	8	, staionName:	"Buoy 1"	, date:	"23/09/2024"	,time:	"10:10"	,waterLevel:	"14"	,temperature:	"34"	},
    {	id:	9	, staionName:	"Buoy 1"	, date:	"24/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
    {	id:	10	, staionName:	"Buoy 1"	, date:	"24/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"21"	},
    {	id:	11	, staionName:	"Buoy 1"	, date:	"24/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
    {	id:	12	, staionName:	"Buoy 1"	, date:	"25/09/2024"	,time:	"10:10"	,waterLevel:	"15"	,temperature:	"34"	},
    {	id:	13	, staionName:	"Buoy 1"	, date:	"25/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
    {	id:	14	, staionName:	"Buoy 1"	, date:	"25/09/2024"	,time:	"20:10"	,waterLevel:	"12"	,temperature:	"34"	},
    {	id:	15	, staionName:	"Buoy 1"	, date:	"25/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
    {	id:	16	, staionName:	"Buoy 1"	, date:	"26/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"35"	},
    {	id:	17	, staionName:	"Buoy 1"	, date:	"26/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
    {	id:	18	, staionName:	"Buoy 1"	, date:	"26/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
    {	id:	19	, staionName:	"Buoy 1"	, date:	"26/09/2024"	,time:	"130:10"	,waterLevel:	"12"	,temperature:	"34"	},
    {	id:	20	, staionName:	"Buoy 1"	, date:	"26/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
    {	id:	21	, staionName:	"Buoy 1"	, date:	"26/09/2024"	,time:	"10:10"	,waterLevel:	"32"	,temperature:	"34"	},
    {	id:	22	, staionName:	"Buoy 1"	, date:	"27/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"44"	},
    {	id:	23	, staionName:	"Buoy 1"	, date:	"27/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	}
    ];  // Copy your employee data array here
    secondBuoys = [  {	id:	1	, staionName:	"Buoy 1"	, date:	"21/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	2	, staionName:	"Buoy 2"	, date:	"21/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	3	, staionName:	"Buoy 2"	, date:	"21/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	4	, staionName:	"Buoy 2"	, date:	"22/09/2024"	,time:	"11:10"	,waterLevel:	"42"	,temperature:	"34"	},
      {	id:	5	, staionName:	"Buoy 2"	, date:	"22/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"35"	},
      {	id:	6	, staionName:	"Buoy 2"	, date:	"23/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	7	, staionName:	"Buoy 2"	, date:	"23/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	8	, staionName:	"Buoy 2"	, date:	"23/09/2024"	,time:	"10:10"	,waterLevel:	"14"	,temperature:	"34"	},
      {	id:	9	, staionName:	"Buoy 2"	, date:	"24/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	10	, staionName:	"Buoy 2"	, date:	"24/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"21"	},
      {	id:	11	, staionName:	"Buoy 2"	, date:	"24/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	12	, staionName:	"Buoy 1"	, date:	"25/09/2024"	,time:	"10:10"	,waterLevel:	"15"	,temperature:	"34"	},
      {	id:	13	, staionName:	"Buoy 1"	, date:	"25/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	14	, staionName:	"Buoy 1"	, date:	"25/09/2024"	,time:	"20:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	15	, staionName:	"Buoy 1"	, date:	"25/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	16	, staionName:	"Buoy 1"	, date:	"26/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"35"	},
      {	id:	17	, staionName:	"Buoy 1"	, date:	"26/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	18	, staionName:	"Buoy 1"	, date:	"26/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	19	, staionName:	"Buoy 1"	, date:	"26/09/2024"	,time:	"130:10"	,waterLevel:	"12"	,temperature:	"34"	},
      {	id:	20	, staionName:	"Buoy 1"	, date:	"26/09/2024"	,time:	"10:10"	,waterLevel:	"12"	,temperature:	"34"	},
      ];  // Copy your employee data array here

      buoys = ['Buoy 1', 'Buoy 2'];
      selectedBuoy: string = 'Buoy 1';  
      paginatedData = [...this.buoyData];

      loading: boolean = false;

    //   ngOnInit() {
    //     this.buoys = [
    //         { name: 'Buoy 1'},
    //         { name: 'Buoy 2'},          
    //     ];
    // }

    get buoyData() {
      return this.selectedBuoy === 'Buoy 1' ? this.firstBuoys : this.secondBuoys;
    }
    onBuoyChange(selected: string) {
      this.selectedBuoy = selected;
    }

    exportCSV(dt2: any) {
        // Store the original selected columns
        // const originalSelectedColumns = [...this._selectedColumns];
    
        // Temporarily set all columns for export
        // this._selectedColumns = this.cols;
    
        // Trigger the export
        dt2.exportCSV();
    
        // Revert back to the original selected columns
        // this._selectedColumns = originalSelectedColumns;
    }
    }
  


