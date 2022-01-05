import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent} from './default.component'
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';
import {MatTableModule} from '@angular/material/table';
import { TutorialService } from 'src/app/services/tutorial.service';
import { TutorialDetailsComponent } from 'src/app/modules/tutorial/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from 'src/app/modules/tutorial/tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from 'src/app/modules/tutorial/add-tutorial/add-tutorial.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AddDriversComponent } from 'src/app/modules/drivers/add-drivers/add-drivers.component';
import { DriversListComponent } from 'src/app/modules/drivers/drivers-list/drivers-list.component';
import { DriversDetailsComponent } from 'src/app/modules/drivers/drivers-details/drivers-details.component';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    AddTutorialComponent,
    AddDriversComponent,
    DriversListComponent,
    DriversDetailsComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    DashboardService,
    TutorialService,
    DriversService
  ]
})
export class DefaultModule { }
