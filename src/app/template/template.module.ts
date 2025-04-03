import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UsuariosModule } from '../modulos/usuarios/usuarios.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    UsuariosModule,
    
    MatMenuModule, 
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class TemplateModule { }
