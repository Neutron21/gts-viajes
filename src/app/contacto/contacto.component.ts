import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: false, // O true si prefieres, según lo que tengas en tu módulo
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent {

  isOpen = false;
  selectedText = 'Selecciona';
  
  // Estados para el loader y el modal
  enviando = false;
  modalExitoVisible = false;

  formData = {
    nombre: '',
    correo: '',
    telefono: '',
    destino: '',
    fecha: '',
    presupuesto: '',
    mensaje: ''
  };

  constructor(private http: HttpClient) {}

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string, event: Event): void {
    event.stopPropagation();
    this.selectedText = option;
    this.formData.presupuesto = option;
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-select')) {
      this.isOpen = false;
    }
  }

  enviarCotizacion(): void {
    const urlPhp = 'https://solu-tec.net/api/php/gts-viajes.php'; 

    // Activar loader de avión
    this.enviando = true;

    this.http.post(urlPhp, this.formData).subscribe({
      next: (response: any) => {
        this.enviando = false;
        this.modalExitoVisible = true; // Mostrar modal de éxito
        
        // Limpiar formulario y selector
        this.formData = { nombre: '', correo: '', telefono: '', destino: '', fecha: '', presupuesto: '', mensaje: '' };
        this.selectedText = 'Selecciona';
      },
      error: (err) => {
        console.error(err);
        this.enviando = false;
        alert('Hubo un error al enviar el correo. Inténtalo de nuevo.');
      }
    });
  }

  cerrarModal(): void {
    this.modalExitoVisible = false;
  }
}