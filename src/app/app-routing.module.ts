import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  /*redirectTo后面的地址加或者不加都一样*/
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'project', redirectTo: '/project', pathMatch: 'full'},
  {path: 'taskLists', redirectTo: '/taskLists', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
