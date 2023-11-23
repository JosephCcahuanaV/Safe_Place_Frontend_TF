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
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ListaLocales2Component } from './components/lista-locales2/lista-locales2.component';
import { ListaRendersComponent } from './components/lista-renders/lista-renders.component';
import { ListaClientsComponent } from './components/lista-clients/lista-clients.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PagarComponent } from './components/pagar/pagar.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  // Public
  { path: 'registro', component: RegistroComponent, canActivate: [AuthGuard] },
  { path: 'login', component: InicioSesionComponent, canActivate: [AuthGuard] },
  { path: 'aviso', component: AvisoComponent },
  { path: 'aviso_render', component: AvisoRenderComponent },
  { path: 'registro_cliente', component: Registro2Component },
  { path: 'registro_renter', component: RegistroRenderComponent },
  // Private
  {
    path: 'registro_local',
    component: PublicarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'locales',
    component: ListaLocalesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'historial_client',
    component: HistorialClienteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'infoUsuario',
    component: ViewProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'pagar', component: PagarComponent, canActivate: [AuthGuard] },
  { path: 'publicar', component: PublicarComponent, canActivate: [AuthGuard] },
  {
    path: 'usuarios',
    component: ListaUsuariosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lista_locales',
    component: ListaLocales2Component,
    canActivate: [AuthGuard],
  },
  {
    path: 'renders',
    component: ListaRendersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clients',
    component: ListaClientsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'pago', component: PaymentComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
