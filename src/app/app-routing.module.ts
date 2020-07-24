import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { GroupsComponent } from './groups/groups.component';
import { AddGroupsComponent } from './add-groups/add-groups.component';
import { GroupDetailsComponent } from './group-details/group-details.component';


const routes: Routes = [
  {path:'login',component:UserLoginComponent},
  {path:'contacts',component:ContactsListComponent },
  { path: 'contacts/:id', component: ContactUpdateComponent},
  { path: 'add-contact', component: AddContactComponent},
  {path:'',component:HomeComponent},
  {path:'groups',component:GroupsComponent},
  {path:'add-groups',component:AddGroupsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
