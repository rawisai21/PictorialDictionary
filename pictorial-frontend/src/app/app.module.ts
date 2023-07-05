import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { HomeComponent } from './home/home.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageSuggestionsComponent } from './image-suggestions/image-suggestions.component';
import { GiveSuggestionsComponent } from './give-suggestions/give-suggestions.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserListComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    DictionaryComponent,
    HomeComponent,
    ImageUploadComponent,
    ImageSuggestionsComponent,
    GiveSuggestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
