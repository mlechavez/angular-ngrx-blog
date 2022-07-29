import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './pages';
import { SinglePostComponent } from './pages/single-post/single-post.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PostsComponent },
      { path: ':month/:date/:id', component: SinglePostComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
