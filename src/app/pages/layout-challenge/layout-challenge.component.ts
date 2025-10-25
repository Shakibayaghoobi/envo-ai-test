import { Component } from '@angular/core';
import { DataEntryTableComponent } from "../../components/data-entry-table/data-entry-table.component";
import { SystemMonitorTableComponent } from "../../components/system-monitor-table/system-monitor-table.component";

@Component({
  selector: 'app-layout-challenge',
  imports: [DataEntryTableComponent, SystemMonitorTableComponent],
  templateUrl: './layout-challenge.component.html',
  styleUrl: './layout-challenge.component.scss'
})
export class LayoutChallengeComponent {

}
