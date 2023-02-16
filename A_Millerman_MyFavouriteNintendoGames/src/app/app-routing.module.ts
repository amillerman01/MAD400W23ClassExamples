import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemDetailComponent } from './content-list-item-detail/content-list-item-detail.component';
import { ContentListItemSearchComponent } from './content-list-item-search/content-list-item-search.component';
import { NotFoundComponent } from './not-found/not-found.component';


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
  },
  {
    path: "search",
    component: ContentListItemSearchComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
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
