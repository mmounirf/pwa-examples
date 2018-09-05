import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OfflineComponent } from './offline/offline.component';
import { OfflineWithCacheComponent } from './offline-with-cache/offline-with-cache.component';
import { PreCacheComponent } from './pre-cache/pre-cache.component';
import { LandingComponent } from './landing/landing.component';
import { MatToolbarModule, MatButtonModule, MatProgressSpinnerModule, MatCardModule, MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ApiResolver } from './resolvers/api.resolver';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LandingComponent, resolve: {data: ApiResolver} },
  { path: 'offline', component: OfflineComponent, resolve: {data: ApiResolver} },
  { path: 'offline-with-cache', component: OfflineWithCacheComponent, resolve: {data: ApiResolver} },
  { path: 'pre-cache', component: PreCacheComponent, resolve: {data: ApiResolver} }
];

@NgModule({
  declarations: [
    AppComponent,
    OfflineComponent,
    OfflineWithCacheComponent,
    PreCacheComponent,
    LandingComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [ApiResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
