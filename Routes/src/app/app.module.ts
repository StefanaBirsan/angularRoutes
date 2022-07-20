import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './Components/users/users.component';
import { FormsModule } from '@angular/forms';
import { ModifyUserComponent } from './Components/modify-user/modify-user.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, ModifyUserComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
