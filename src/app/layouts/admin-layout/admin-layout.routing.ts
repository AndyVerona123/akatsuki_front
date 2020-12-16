import {Routes} from '@angular/router';
import {AuthGuardService} from '../../share/servicios/auth-guard.service';
import {ClientesComponent} from '../../pages/clientes/clientes.component';
import {DepartamentosComponent} from '../../pages/departamentos/departamentos.component';
import {CiudadesComponent} from '../../pages/ciudades/ciudades.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'clientes', component: ClientesComponent, canActivate: [AuthGuardService]},
  {path: 'departamentos', component: DepartamentosComponent, canActivate: [AuthGuardService]},
  {path: 'ciudades', component: CiudadesComponent, canActivate: [AuthGuardService]},
];
