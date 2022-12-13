import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletecontactComponent } from './deletecontact.component';

const routes: Routes = [
  {
    path: "",
    component: DeletecontactComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeletecontactRoutingModule { }
