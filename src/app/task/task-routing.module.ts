import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TaskHomeComponent} from "./task-home/task-home.component";

const routes: Routes = [
  /*redirectTo后面的地址加或者不加都一样*/
  {path: 'taskLists', component: TaskHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
