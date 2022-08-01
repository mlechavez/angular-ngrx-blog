import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { Card } from 'src/app/shared';
import {
  AppState,
  getRelatedPostsRequest,
  Post,
  selectSinglePost,
  selectRelatedPosts,
  PostCategory,
  getPostCategoriesRequest,
  selectPostCategories,
  getPostCategoriesFromSinglePostRequest,
} from '../../../core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  post$: Observable<Post | undefined> | undefined;
  postCategories$: Observable<PostCategory[]> | undefined;
  relatedPosts$: Observable<Card[]> | undefined;
  category: string = 'tech';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.post$ = this.store.select(selectSinglePost);

    this.store.dispatch(getPostCategoriesFromSinglePostRequest());
    this.postCategories$ = this.store.select(selectPostCategories);

    this.store.dispatch(getRelatedPostsRequest({ category: this.category }));
    this.relatedPosts$ = this.store.pipe(
      select(selectRelatedPosts),
      map((posts) => this.mapCards(posts))
    );
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
