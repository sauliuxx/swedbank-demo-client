import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PersonListComponent } from './person-list/person-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';

import { PersonService } from './shared/person/person.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
