import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout.component';
import { HomeComponent } from './view/home/home.component';
import { ContactComponent } from './view/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { title: '| Home' },
      },
      // {
      //   path: 'contact',
      //   component: ContactComponent,
      //   data: { title: '| Home' },
      // },
    ],
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
