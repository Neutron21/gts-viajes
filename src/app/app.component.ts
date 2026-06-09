import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'gts-viajes';
  menuVisible = false;

  // Alterna el menú (Abrir/Cerrar)
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  // Cierra el menú explícitamente al navegar
  closeMenu() {
    this.menuVisible = false;
  }
}