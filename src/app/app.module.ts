import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { CommService } from './Services/comm.service';
import { LocalCommService } from './Services/local-comm.service';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddMeanOfContactComponent } from './add-mean-of-contact/add-mean-of-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GroupsComponent } from './groups/groups.component';
import { AddGroupsComponent } from './add-groups/add-groups.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ImageComponent } from './image/image.component';
import { FilterByGroupComponent } from './filter-by-group/filter-by-group.component';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { GroupDetailsComponent } from './group-details/group-details.component';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HeaderComponent,
    HomeComponent,
    ContactsListComponent,
    ContactUpdateComponent,
    AddContactComponent,
    AddMeanOfContactComponent,
    GroupsComponent,
    AddGroupsComponent,
    SignInComponent,
    SignUpComponent,
    ImageComponent,
    FilterByGroupComponent,
    SearchContactComponent,
    GroupDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: CommService, useClass: LocalCommService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
