import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './component/perfil/perfil.component';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from '../primeng/primeng.module';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PerfilComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    CoreModule,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
