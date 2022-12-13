import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseGroupComponent } from './choose-group.component';

const routes: Routes = [  {
  path: "",
  component: ChooseGroupComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseGroupRoutingModule { }
