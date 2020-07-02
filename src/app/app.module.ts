import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToppanelComponent } from './toppanel/toppanel.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { PreeminenceComponent } from './pages/preeminence/preeminence.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToppanelComponent,
    HomeComponent,
    ServiceComponent,
    PreeminenceComponent,
    ContactsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
