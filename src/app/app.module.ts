import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskItemComponent } from './component/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const appRoutes: Routes = [
  {
    path: '', 
    component: TasksComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  }
]

const firebaseConfig = {
  apiKey: "AIzaSyDYxvym2kkIYOtNAenPp52M_iFkPWyh8vo",
  authDomain: "ang-fire-b15d9.firebaseapp.com",
  databaseURL: "https://ang-fire-b15d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ang-fire-b15d9",
  storageBucket: "ang-fire-b15d9.appspot.com",
  messagingSenderId: "879198693668",
  appId: "1:879198693668:web:100d804861937b62f5ebb1"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true}),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
