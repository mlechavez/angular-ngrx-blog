import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import {
  AppState,
  getPostCategoriesRequest,
  getPostsRequest,
  PostCategory,
  selectPostCategories,
  selectPosts,
} from '../../../core';
import { Card } from '../../../shared';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  title: string = 'Blog';
  postListTitle: string = 'Latest Posts';
  postListCards$: Observable<Card[]> | undefined;
  postCategories$: Observable<PostCategory[]> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getPostsRequest({ pageNumber: 1, pageSize: 15 }));
    this.store.dispatch(getPostCategoriesRequest());

    this.postListCards$ = this.store.pipe(
      select(selectPosts),
      map((posts) => this.mapCards(posts))
    );

    this.postCategories$ = this.store.select(selectPostCategories);
  }

  private mapCards(posts: Post[]): Card[] {
    return posts.map((post) => ({
      title: post.title,
      author: post.author.name,
      category: post.category.name,
      image: post.image,
      postedOn: new Date(post.createdAt).toDateString(),
      summary: post.summary,
      link: `/blog/${new Date(post.createdAt).getMonth()}/${new Date(
        post.createdAt
      ).getDate()}/${post._id}`,
    }));
  }
}
