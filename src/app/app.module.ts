import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BingResultsComponent } from './components/bing-results/bing-results.component';
import { GoogleResultsComponent } from './components/google-results/google-results.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BingResultsComponent,
    GoogleResultsComponent,
    SettingsComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
