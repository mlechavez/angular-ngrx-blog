import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, PostCategory } from '../../../core';

@Component({
  selector: 'app-category-list-widget',
  templateUrl: './category-list-widget.component.html',
  styleUrls: ['./category-list-widget.component.scss'],
})
export class CategoryListWidgetComponent implements OnInit {
  @Input() postCategories: PostCategory[] | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
