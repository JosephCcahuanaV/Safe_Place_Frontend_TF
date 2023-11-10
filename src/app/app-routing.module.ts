import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LandingComponent } from './components/landing/landing.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { AvisoComponent } from './components/aviso/aviso.component';
import { Registro2Component } from './components/registro2/registro2.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { ListaLocalesComponent } from './lista-locales/lista-locales.component';

const routes: Routes = [
  { path: "", component:LandingComponent  },
  { path: "registro", component:RegistroComponent  },
  { path: "inicio", component:InicioSesionComponent  },
  { path: "aviso", component:AvisoComponent  },
  { path: "registro_cliente", component:Registro2Component  },
  { path: "login", component:InicioSesionComponent  },
  { path: "registro_local", component:PublicarComponent  },
  { path: "Lista-locales",component:ListaLocalesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
