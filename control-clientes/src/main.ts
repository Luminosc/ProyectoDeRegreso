import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { environment } from './environments/environment.development';
import {provideFirebaseApp,initializeApp} from '@angular/fire/app';
bootstrapApplication(AppComponent, {
  ...appConfig,
providers:[
  provideHttpClient(),
  provideFirebaseApp(() => initializeApp(environment,firebaseConfig))
]})
  .catch((err) => console.error(err));
