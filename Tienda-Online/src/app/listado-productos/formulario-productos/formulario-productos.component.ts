import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../../Service/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { producto } from '../producto/producto.model';

@Component({
  selector: 'app-formulario-productos',
  imports: [FormsModule],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css',
})
export class FormularioProductosComponent {
  inputDescripcion: string = '';
  inputPrecio: number | null = null;
  llaveProducto: string | null = null;
  constructor(
    private readonly productoservice: ServicioService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    //así se obtiene el ultimo ID
    const llave = this.route.snapshot.paramMap.get('llave');
    if (llave) {
      const Producto = this.productoservice.getProductoByLlave(llave);
      if (Producto) {
        this.llaveProducto = llave;
        this.inputDescripcion = Producto.Description;
         this.inputPrecio = Producto.Precio;
      }
    }
  }

  actualizarproducto(evento: Event) {
    const elementeoInput = evento.target as HTMLInputElement;
    this.inputDescripcion = elementeoInput.value;
  }

  actualizarprecio(evento: Event) {
    const elementeoInput = evento.target as HTMLInputElement;
    this.inputPrecio = Number(elementeoInput.value);
  }

  guardarProducto(evento: Event) {
    evento.preventDefault();

    if (
      this.inputDescripcion.trim() === '' ||
      this.inputPrecio == null ||
      this.inputPrecio <= 0
    ) {
      console.log('debes de ingresasar una descipción y precio valido');
      return;
    }

    const produc = new producto(
      this.inputDescripcion,
      this.inputPrecio
    );
    this.productoservice.guardarProducto(produc, this.llaveProducto);
    this.limpiarFormulario;
    this.Cancelar();
  }
  Cancelar() {
    this.router.navigate(['/']);
  }
  EliminarProducto() {
    if(this.llaveProducto !== null)
    {
      this.productoservice.eliminarProducto(this.llaveProducto);
      this.router.navigate(['/']);
    }
  }

  limpiarFormulario(){
    this.llaveProducto= null;
    this.inputDescripcion= '';
    this.inputPrecio = null;
  }
}
