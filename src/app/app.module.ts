import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BingResultsComponent } from './bing-results/bing-results.component';
import { GoogleResultsComponent } from './google-results/google-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BingResultsComponent,
    GoogleResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
