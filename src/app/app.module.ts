import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbSidebarService,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { PageComponent } from './Component/page/page.component';

import { HttpClientModule } from '@angular/common/http';
//import firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: 'AIzaSyCyTsJ2W5X0r5KAr6xKLfPjAE7lZTjXhYE',
  authDomain: 'testfirebase-dbead.firebaseapp.com',
  databaseURL: 'https://testfirebase-dbead-default-rtdb.firebaseio.com',
  projectId: 'testfirebase-dbead',
  storageBucket: 'testfirebase-dbead.appspot.com',
  messagingSenderId: '1090160067586',
};

//import material
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { DataViewModule } from 'primeng/dataview';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxTablePaginationModule } from "ngx-table-pagination";


@NgModule({
  declarations: [AppComponent, SidebarComponent, PageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbButtonModule,

    NgxPaginationModule,
    // NgxTablePaginationModule,

    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,

    MatTabsModule,

    DataViewModule,
  ],
  providers: [
    NbSidebarService,
    { provide: BUCKET, useValue: 'testfirebase-dbead.appspot.com' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
