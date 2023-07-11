import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'aboutpage', component: AboutpageComponent },
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
