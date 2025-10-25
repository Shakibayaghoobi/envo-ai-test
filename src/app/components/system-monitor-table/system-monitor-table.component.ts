import { DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-system-monitor-table',
  imports: [DecimalPipe, MatButton],
  templateUrl: './system-monitor-table.component.html',
  styleUrl: './system-monitor-table.component.scss',
})
export class SystemMonitorTableComponent implements OnInit, OnDestroy {
  systemStats = {
    ramUsed: 0,
    ramTotal: 16,
    cpuUsage: 0,
    networkSpeed: 0,
    diskUsage: 0,
  };
  isMonitoring = true;
  intervalId: any;
  ngOnInit(): void {
    this.startMonitoring();
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  startMonitoring() {
    this.intervalId = setInterval(() => {
      if (!this.isMonitoring) return;
      this.systemStats = {
        ramUsed: +(4 + Math.random() * 10).toFixed(2),
        ramTotal: 16,
        cpuUsage: +(10 + Math.random() * 80).toFixed(1),
        networkSpeed: +(0.5 + Math.random() * 99.5).toFixed(2),
        diskUsage: +(45 + Math.random() * 40).toFixed(1),
      };
    }, 2000);
  }

  toggleMonitoring() {
    this.isMonitoring = !this.isMonitoring;
  }
  getStatusColor(value: number, thresholds: { good: number; warning: number }): string {
    if (value < thresholds.good) return 'status-good';
    if (value < thresholds.warning) return 'status-warning';
    return 'status-critical';
  }

  getCpuStatus(): string {
    const cpu = this.systemStats.cpuUsage;
    return this.getStatusColor(cpu, { good: 50, warning: 75 });
  }

  getRamStatus(): string {
    const percentage = (this.systemStats.ramUsed / this.systemStats.ramTotal) * 100;
    return this.getStatusColor(percentage, { good: 60, warning: 80 });
  }

  getDiskStatus(): string {
    const disk = this.systemStats.diskUsage;
    return this.getStatusColor(disk, { good: 60, warning: 80 });
  }

  getNetworkStatus(): string {
    const speed = this.systemStats.networkSpeed;
    if (speed > 50) return 'status-good';
    if (speed > 10) return 'status-warning';
    return 'status-critical';
  }
}
