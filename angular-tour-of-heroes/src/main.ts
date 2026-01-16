import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routes from './app/app.routes';
import { importProvidersFrom } from '@angular/core';

import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';


bootstrapApplication(AppComponent, 
  {
    providers: [
        // 1 - provide routing
      provideRouter(routes),

        // 2 - provide HttpClient
      provideHttpClient(withInterceptorsFromDi()),

        // 3 - provide the in-memory backend
      importProvidersFrom(
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService,
          {
            dataEncapsulation: false
          })
      )
    
    ]
  }
).catch((err) => console.error(err));
