import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
      path: 'usuarios',
      loadChildren: () => import('../modulos/usuarios/usuarios.module').then(m => m.UsuariosModule)
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterLink],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
