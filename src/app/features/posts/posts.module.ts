import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostCardComponent } from './post-card/post-card.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', pathMatch: 'full', component: PostsComponent }],
  },
];
@NgModule({
  declarations: [PostListComponent, PostsComponent, PostCardComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class PostsModule {}
