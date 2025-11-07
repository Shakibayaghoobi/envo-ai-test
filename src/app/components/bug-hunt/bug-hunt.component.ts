import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-bug-hunt',
  imports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './bug-hunt.component.html',
  styleUrl: './bug-hunt.component.scss',
})
export class BugHuntComponent {
  counter = 0;
  items: Item[] = [
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 20, quantity: 2 },
    { id: 3, name: 'Item 3', price: 15, quantity: 1 },
  ];
  discount = 0;
  username = '';
  isLoggedIn = false;
  displayedColumns = ['name', 'price', 'quantity', 'subtotal', 'actions'];

  increment() {
    // In React => Every time the counter changes, the effect runs again
    // In Angular => I fixed this by using an Increment button
    this.counter++;
  }
  // New feature
  get totalQuantity(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  // In React used "=" instead of "*" for total
  get total(): number {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }
  // In React: discount added instead of subtracted

  get finalTotal(): number {
    return this.total - this.total * (this.discount / 100);
  }

  // In React => login/logout states reversed
  handleLogin(): void {
    if (this.username.trim().length < 3) {
      alert('Username must be at least 3 characters');
      return;
    }
    this.isLoggedIn = true;
  }

  handleLogout(): void {
    this.isLoggedIn = false;
    this.username = '';
  }
  //In React : missing item fields after quantity update
  updateQuantity(id: number, newQuantity: number): void {
    this.items = this.items.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    const quantities = this.items.map((q) => q.quantity);
    localStorage.setItem('quantities', JSON.stringify(quantities));
  }
  //  wrong filter condition (== instead of !==)
  removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
