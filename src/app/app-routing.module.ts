import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { DynamicFormsComponent } from "./dynamic-forms/dynamic-forms.component";
import { CandidateDetailComponent } from "./candidate-detail/candidate-detail.component";

const routes: Routes = [
  { path: '', component: AddCandidateComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent},
  { path: 'dynamic-forms', component: DynamicFormsComponent},
  { path: 'candidate-detail', component: CandidateDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
