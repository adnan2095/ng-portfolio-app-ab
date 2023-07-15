import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { SampleApiDataComponent } from './sample-api-data/sample-api-data.component';

const routes: Routes = [
  { path: 'aboutpage', component: AboutpageComponent },
  { path: '', component: HomepageComponent },
  { path: 'contactpage', component: ContactpageComponent },
  { path: 'sample-api-data', component: SampleApiDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
