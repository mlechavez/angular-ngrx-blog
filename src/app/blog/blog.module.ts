import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared';

import {
  CategoryListWidgetComponent,
  PostListComponent,
  RelatedPostComponent,
} from './components';
import { PostsComponent, SinglePostComponent } from './pages';

@NgModule({
  declarations: [
    PostListComponent,
    PostsComponent,
    SinglePostComponent,
    RelatedPostComponent,
    CategoryListWidgetComponent,
  ],
  imports: [PostsRoutingModule, SharedModule],
})
export class PostsModule {}
