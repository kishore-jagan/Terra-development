import { AfterViewInit, Component, OnInit } from "@angular/core";
import { AgCharts } from "ag-charts-angular";
// Chart Options Type Interface
import { AgChartOptions } from "ag-charts-community";
import Chart from "chart.js/auto";
import { NgxGaugeModule } from "ngx-gauge";

import { MenuItem, MessageService } from "primeng/api";
import { TerminalModule } from "primeng/terminal";
import { TerminalService } from "primeng/terminal";
import { Subscription } from "rxjs";
import { DockModule } from "primeng/dock";
import { MenubarModule } from "primeng/menubar";
import { ToastModule } from "primeng/toast";
import { DialogModule } from "primeng/dialog";
import { TreeModule } from "primeng/tree";
import { GalleriaModule } from "primeng/galleria";
import { RadioButtonModule } from "primeng/radiobutton";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AnimateOnScrollModule } from "primeng/animateonscroll";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AnimateOnScrollModule,
    RadioButtonModule,
    DockModule,
    MenubarModule,
    ToastModule,
    DialogModule,
    TreeModule,
    TerminalModule,
    GalleriaModule,
    AgCharts,
    NgxGaugeModule,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
  providers: [MessageService, TerminalService],
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    const searchIcon = document.querySelector('.search-icon-wrapper');
    searchIcon?.addEventListener('click', () => {
      searchIcon?.parentElement?.classList.toggle('open');
    });
  }
}
