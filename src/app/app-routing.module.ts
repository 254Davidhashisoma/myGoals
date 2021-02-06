import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalComponent } from './goal/goal.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'goals', component: GoalComponent },
  { path: 'about', component: AboutComponent },
  { path:'**', component:NotFoundComponent},
  { path: 'goals/:id', component: GoalDetailComponent },

  { path: '', redirectTo:"/goals", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
