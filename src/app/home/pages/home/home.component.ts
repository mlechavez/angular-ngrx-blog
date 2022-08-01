import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { AppState, getFeaturedPostsRequest, selectPosts } from '../../../core';
import { Card } from '../../../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  title: string = 'Featured Posts';
  postSubscription$: Subscription | undefined;
  cards: Card[] | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(
      getFeaturedPostsRequest({ pageNumber: 1, pageSize: 4 })
    );

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
      ).getDate()}/${post._id}`,
    }));
  }

  ngOnDestroy(): void {
    if (this.postSubscription$) this.postSubscription$.unsubscribe();
  }
}
