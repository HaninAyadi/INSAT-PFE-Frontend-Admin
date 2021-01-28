import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {PagesModule} from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        FontAwesomeModule,
        AuthenticationModule,
        PagesModule,

    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
