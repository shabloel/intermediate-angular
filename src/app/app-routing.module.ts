import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatComponent } from './components/routing-examples/cat/cat.component';
import { DogComponent } from './components/routing-examples/dog/dog.component';
import { RoutingHomeComponent } from './components/routing-examples/routing-home/routing-home.component';
import { AccountsComponent } from './components/services-examples/accounts/accounts.component';
import { ServicesHomeComponent } from './components/services-examples/services-home/services-home.component';
import { UsersComponent } from './components/services-examples/users/users.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: 'services', component: ServicesHomeComponent },
  { path: 'user-details/:change', component: UsersComponent },
  { path: 'routing', component: RoutingHomeComponent },
  { path: 'account-details', component: AccountsComponent },
  //******************************************************* */
  //******************************************************* */
  //******************************************************* */
  //**********Routing examples **************************** */

  { path: 'cat', component: CatComponent },
  { path: 'dog/:id', component: DogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
