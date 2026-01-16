import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { HomeComponent } from './app/pages/home/home.component';

const bootstrap = () => bootstrapApplication(
    //HomeComponent,
    AppComponent, 
    config);

export default bootstrap;
