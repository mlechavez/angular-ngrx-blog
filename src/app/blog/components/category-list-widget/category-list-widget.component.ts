import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getPostCategoriesRequest,
  selectPostCategories,
} from 'src/app/core/store/posts-categories';
import { AppState, PostCategory } from '../../../core';

@Component({
  selector: 'app-category-list-widget',
  templateUrl: './category-list-widget.component.html',
  styleUrls: ['./category-list-widget.component.scss'],
})
export class CategoryListWidgetComponent implements OnInit {
  postCategories$: Observable<PostCategory[]> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getPostCategoriesRequest());
    this.postCategories$ = this.store.select(selectPostCategories);
  }
}
