import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

// Agrega FormsModule al decorador @NgModule si no está ya presente

@NgModule({
  // Otros metadatos del módulo...
  imports: [
    FormsModule
  ],
})
export class AppComponent {
  // Contenido del componente...
}
