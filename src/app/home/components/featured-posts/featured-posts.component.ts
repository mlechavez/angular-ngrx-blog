import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { Post, AppState, getPostsRequest, selectPosts } from '../../../core';
import { Card } from '../../../shared';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.scss'],
})
export class FeaturedPostsComponent implements OnInit, OnDestroy {
  postSubscription$: Subscription | undefined;
  cards: Card[] | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getPostsRequest({ pageIndex: 1, pageSize: 6 }));

    this.postSubscription$ = this.store
      .select(selectPosts)
      .pipe(map((posts) => this.mapCards(posts)))
      .subscribe((cards) => (this.cards = cards));
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
      ).getDate()}/${post._id}}`,
    }));
  }

  ngOnDestroy(): void {
    if (this.postSubscription$) this.postSubscription$.unsubscribe();
  }
}
