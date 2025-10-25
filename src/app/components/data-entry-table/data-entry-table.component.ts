import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
interface Entry {
  id: number;
  name: string;
  email: string;
  department: string;
  phone: string;
  timestamp: string;
}
@Component({
  selector: 'app-data-entry-table',
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    RouterLinkActive
  ],
  templateUrl: './data-entry-table.component.html',
  styleUrl: './data-entry-table.component.scss',
})
export class DataEntryTableComponent implements OnInit {
  formData = { name: '', email: '', department: '', phone: '' };
  entries: Entry[] = [];
  displayedColumns: string[] = [
    'name',
    'email',
    'department',
    'phone',
    'timestamp',
    'action',
  ];

  ngOnInit(): void {
    const saved = localStorage.getItem('userEntries');
    if (saved) this.entries = JSON.parse(saved);
  }
  saveEntries() {
    localStorage.setItem('userEntries', JSON.stringify(this.entries));
  }

  addEntry() {
    const { name, email, department, phone } = this.formData;
    if (!name || !email || !department || !phone) {
      alert('Please fill in all fields');
      return;
    }

    const newEntry: Entry = {
      ...this.formData,
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
    };

    this.entries.push(newEntry);
    this.entries = [...this.entries]; // create a new array reference, triggering Angular

    this.saveEntries();

    // Reset form
    this.formData = { name: '', email: '', department: '', phone: '' };
  }

  deleteEntry(id: number) {
    this.entries = this.entries.filter((e) => e.id !== id);
    this.entries = [...this.entries]; // <---- Important line
    this.saveEntries();
  }

  clearAll() {
    if (confirm('Are you sure you want to clear all entries?')) {
      this.entries = [];
      localStorage.removeItem('userEntries');
    }
  }
}
