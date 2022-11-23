import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/services-examples/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/routing-examples/information/information.component';
import { ServicesHomeComponent } from './components/services-examples/services-home/services-home.component';
import { RoutingHomeComponent } from './components/routing-examples/routing-home/routing-home.component';
import OverviewComponent from './components/services-examples/overview/overview.component';
import { FormsModule } from '@angular/forms';
import { AccountsComponent } from './components/services-examples/accounts/accounts.component';
import { TestComponent } from './test/test.component';
import { CatComponent } from './components/routing-examples/cat/cat.component';
import { DogComponent } from './components/routing-examples/dog/dog.component';
import { SmallCatComponent } from './components/routing-examples/small-cat/small-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    InformationComponent,
    ServicesHomeComponent,
    RoutingHomeComponent,
    OverviewComponent,
    AccountsComponent,
    TestComponent,
    CatComponent,
    DogComponent,
    SmallCatComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
