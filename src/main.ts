import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(NgSelectModule, BaseChartDirective), provideCharts(withDefaultRegisterables()),
    provideHttpClient(withFetch())
  ]
})
  .catch(err => console.error(err));
