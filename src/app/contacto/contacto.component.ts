import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent {

  isOpen = false;
  selectedText = 'Selecciona';

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string, event: Event): void {
    event.stopPropagation();
    this.selectedText = option;
    this.isOpen = false;
  }

  // 👇 Cierra si haces click fuera del componente
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    // Si el click NO fue dentro del select → cerrar
    if (!target.closest('.custom-select')) {
      this.isOpen = false;
    }
  }
}