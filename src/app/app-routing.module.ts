import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component import 
import { CategoriesComponent } from './components/categories/categories.component';
import { GeneralComponent } from './components/general/general.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: GeneralComponent},
  {path: 'categories/:category', component: CategoriesComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
