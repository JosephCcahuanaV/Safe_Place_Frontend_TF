import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './components/registro/registro.component';
import { LandingComponent } from './components/landing/landing.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { AvisoComponent } from './components/aviso/aviso.component';
import { Registro2Component } from './components/registro2/registro2.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaLocalesComponent } from './lista-locales/lista-locales.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LandingComponent,
    InicioSesionComponent,
    AvisoComponent,
    Registro2Component,
    PublicarComponent,
    NavbarComponent,
    ListaLocalesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
