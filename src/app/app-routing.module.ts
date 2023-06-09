import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { AboutComponent } from './pages/components/about/about.component';
import { ContactComponent } from './pages/components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about/:id',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
