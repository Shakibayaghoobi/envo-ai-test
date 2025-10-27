import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-bug-hunt',
  imports: [FormsModule],
  templateUrl: './bug-hunt.component.html',
  styleUrl: './bug-hunt.component.scss',
})
export class BugHuntComponent implements OnInit {
  counter = 0;
  items: Item[] = [
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 20, quantity: 2 },
    { id: 3, name: 'Item 3', price: 15, quantity: 1 },
  ];
  discount = 0;
  username = '';
  isLoggedIn = false;
  ngOnInit(): void {
    this.counter++;
  }
  get total(): number {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  get finalTotal(): number {
    return this.total - this.total * (this.discount / 100);
  }

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

  updateQuantity(id: number, newQuantity: number): void {
    this.items = this.items.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
  }

  removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
