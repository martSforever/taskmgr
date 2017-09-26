import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProjectListComponent} from "./project-list/project-list.component";

const routes: Routes = [
  /*redirectTo后面的地址加或者不加都一样*/
  {path: 'project', component: ProjectListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {
}
