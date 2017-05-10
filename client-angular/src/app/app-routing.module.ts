import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SigninComponent} from "./signin/signin.component";
import {HomeComponent} from "./home/home.component";

const routes : Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: SigninComponent},
  {path: 'home', component: HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule {}

