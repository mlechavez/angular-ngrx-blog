import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [PostListComponent, PostsComponent],
  imports: [CommonModule],
})
export class PostsModule {}
