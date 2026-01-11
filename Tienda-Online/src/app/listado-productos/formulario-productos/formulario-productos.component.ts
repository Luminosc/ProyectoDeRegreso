import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { producto } from '../producto/producto.model';
import { ServicioService } from '../../Service/servicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-productos',
  imports: [FormsModule],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css',
})
export class FormularioProductosComponent {
  inputDescripcion: string = '';
  inputPrecio: number | null = null;
  prodcutoId: number | null = null;
  constructor(
    private productoservice: ServicioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //así se obtiene el ultimo ID
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const producto = this.productoservice.getProductoById(Number(id));
      if (producto) {
        this.prodcutoId = producto.id;
        (this.inputDescripcion = producto.Description),
          (this.inputPrecio = producto.Precio);
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
      this.prodcutoId,
      this.inputDescripcion,
      this.inputPrecio
    );
    this.productoservice.guardarProducto(produc);
    this.Cancelar();
  }
  Cancelar() {
    this.router.navigate(['/']);
  }
  EliminarProducto() {
    if(this.prodcutoId !== null)
    {
      this.productoservice.eliminarProducto(this.prodcutoId);
      this.router.navigate(['/']);
    }
  }
}
