import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UsersComponent } from './Components/users/users.component';
import { ModifyUserComponent } from './Components/modify-user/modify-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'Users',
    component: UsersComponent,
  },
  {
    path: 'Home/Users',
    redirectTo: 'Users',
    pathMatch: 'full',
  },

  {
    path: 'ModifyUser',
    component: ModifyUserComponent,
  },
  {
    path: 'Users/ModifyUser',
    redirectTo: 'ModifyUser',
    pathMatch: 'full',
  },
  {
    path: 'ModifyUser/Users',
    redirectTo: 'Users',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
