import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AddDriversComponent } from './modules/drivers/add-drivers/add-drivers.component';
import { DriversListComponent } from './modules/drivers/drivers-list/drivers-list.component';
import { PostsComponent } from './modules/posts/posts.component';
import { AddTutorialComponent } from './modules/tutorial/add-tutorial/add-tutorial.component';
import { TutorialsListComponent } from './modules/tutorial/tutorials-list/tutorials-list.component';

const routes: Routes = [
  {
    path : '',
    component: DefaultComponent,
    children : [
      {
        path : '',
        component: DashboardComponent,
      },
      {
        path : 'tutorials',
        component: TutorialsListComponent,
      },
      {
        path : 'add-tutorial',
        component: AddTutorialComponent,
      },    
      {
        path : 'drivers',
        component: DriversListComponent,
      },
      {
        path : 'add-driver',
        component: AddDriversComponent,
      },        
      {
        path: 'posts',
        component: PostsComponent
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
