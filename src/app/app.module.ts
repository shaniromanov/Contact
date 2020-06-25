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
<<<<<<< HEAD
import { AddMeanOfContactComponent } from './add-mean-of-contact/add-mean-of-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
=======
import { GroupsComponent } from './groups/groups.component';
>>>>>>> cc3c0c6a561c22a1d6f1998ebc7d75c26c359cd2

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HeaderComponent,
    HomeComponent,
    ContactsListComponent,
    ContactUpdateComponent,
    AddContactComponent,
<<<<<<< HEAD
    AddMeanOfContactComponent
=======
    GroupsComponent
>>>>>>> cc3c0c6a561c22a1d6f1998ebc7d75c26c359cd2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{provide:CommService,useClass:LocalCommService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
