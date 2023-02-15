import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemDetailComponent } from './content-list-item-detail/content-list-item-detail.component';


const routes: Routes = [
  {
    path: "content",
    component: ContentListComponent,
  },
  {
    path: "",
    redirectTo: "/content",
    pathMatch: "full",
  },
  {
    path: "content/:idNumberValue",
    component: ContentListItemDetailComponent
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
