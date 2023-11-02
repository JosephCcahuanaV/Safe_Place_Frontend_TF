import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  tipousuario:string = "cliente"
  mostrarCampos() {
    const tipoUsuario = (document.getElementById("tipoUsuario") as HTMLSelectElement).value;
    const camposCliente = document.querySelector(".campos-cliente") as HTMLElement;
    const camposArrendador = document.querySelector(".campos-arrendador") as HTMLElement;

    if (tipoUsuario === "cliente") {
        camposCliente.style.display = "grid";
        camposArrendador.style.display = "none";
    } else if (tipoUsuario === "arrendador") {
        camposCliente.style.display = "none";
        camposArrendador.style.display = "grid";
    }
  }
}


