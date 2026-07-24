import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'gts-viajes';
  menuVisible = false;
  activeSection = 'inicio';

  // Alterna el menú (Abrir/Cerrar)
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  // Cierra el menú explícitamente al navegar
  closeMenu() {
    this.menuVisible = false;
  }

  // Detecta la sección activa según el scroll de la página
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['inicio', 'servicios', 'destinos', 'nosotros', 'contacto'];
    const scrollPosition = window.pageYOffset + 150; // Compensación por la altura del navbar

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = sectionId;
        }
      }
    }
  }
}