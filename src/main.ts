import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

try {
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
} catch (error) {
  console.error('Application Bootstrap Error:', error);
  alert('Failed to bootstrap the application. Please try again later.');
}
