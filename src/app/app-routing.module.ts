import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LandingComponent } from './components/landing/landing.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { AvisoComponent } from './components/aviso/aviso.component';
import { Registro2Component } from './components/registro2/registro2.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { ListaLocalesComponent } from './components/lista-locales/lista-locales.component';
import { AvisoRenderComponent } from './components/aviso-render/aviso-render.component';
import { HistorialClienteComponent } from './components/historial-cliente/historial-cliente.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { RegistroRenderComponent } from './components/registro-render/registro-render.component';

const routes: Routes = [
  { path: "", component:LandingComponent  },
  { path: "registro", component:RegistroComponent  },
  { path: "inicio", component:InicioSesionComponent  },
  { path: "aviso", component:AvisoComponent  },
  { path: "registro_cliente", component:Registro2Component  },
  { path: "login", component:InicioSesionComponent  },
  { path: "registro_local", component:PublicarComponent  },
  { path: "locales",component:ListaLocalesComponent},
  { path: "aviso_render", component:AvisoRenderComponent},
  { path: "publicar", component:PublicarComponent},
  { path: "historial_client", component:HistorialClienteComponent},
  { path: "infoUsuario", component:ViewProfileComponent},
  { path: "registro_renter" , component:RegistroRenderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
