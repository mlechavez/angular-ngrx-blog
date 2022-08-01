import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent, SinglePostComponent } from './pages';
import { SinglePostResolver } from './resolvers/single-post.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: ':month/:date/:id',
        component: SinglePostComponent,
        resolve: { singlePost: SinglePostResolver },
        runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
