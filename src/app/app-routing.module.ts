import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';

const routes: Routes = [
  { path: '', component: MainContainerComponent, pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
