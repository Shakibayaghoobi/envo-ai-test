import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive,MatIcon,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'envo-ai';
  showMenu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
