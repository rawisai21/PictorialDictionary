import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { GiveSuggestionsComponent } from './give-suggestions/give-suggestions.component';
import { HomeComponent } from './home/home.component';
import { ImageSuggestionsComponent } from './image-suggestions/image-suggestions.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'admin/users',component:UserListComponent},
  {path:'admin/update-user/:id',component:UpdateUserComponent},
  {path:'admin/user-details/:id',component:UserDetailsComponent},
  {path:'dictionary',component:DictionaryComponent},
  {path:'image-upload',component:ImageUploadComponent},
  {path:'image-suggestions',component:ImageSuggestionsComponent},
  {path:'give-suggestions',component:GiveSuggestionsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
