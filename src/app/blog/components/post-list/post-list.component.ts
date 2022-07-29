import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { AppState } from 'src/app/core/store/app.state';
import { getPostsRequest } from 'src/app/core/store/posts/post.actions';
import { selectPosts } from 'src/app/core/store/posts/post.selectors';
import { Card } from 'src/app/shared/components/card/card.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
  postSubscription$: Subscription | undefined;
  cards: Card[] | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getPostsRequest({ pageIndex: 1, pageSize: 15 }));

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
      link: '',
    }));
  }

  ngOnDestroy(): void {
    if (this.postSubscription$) this.postSubscription$.unsubscribe();
  }
}
