import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentAddEditComponent } from './content-add-edit/content-add-edit.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "content",
    pathMatch: "full",
  },
  {
    path: "content",
    component: ContentListComponent,
  },
  {
    path: "content/:id",
    component: ContentDetailComponent
  },
  {
    path: "add",
    component: ContentAddEditComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
