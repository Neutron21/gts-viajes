import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';           // 👈 1. Importa FormsModule
import { HttpClientModule } from '@angular/common/http'; // 👈 2. Importa HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { InicioComponent } from './inicio/inicio.component';
import { DestinosComponent } from './destinos/destinos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component'; // 👈 3. Importa ContactoComponent
import { ServiciosComponent } from './servicios/servicios.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    InicioComponent,
    ServiciosComponent,
    DestinosComponent,
    NosotrosComponent,
    ContactoComponent, // 👈 4. Añadido aquí (reemplazando el duplicado de Servicios)
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,     // 👈 5. Agrégalo en los imports
    HttpClientModule // 👈 6. Agrégalo en los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }