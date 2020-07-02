import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { PreeminenceComponent } from './pages/preeminence/preeminence.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'preeminence', component: PreeminenceComponent },
  { path: 'contacts', component: ContactsComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],  
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
