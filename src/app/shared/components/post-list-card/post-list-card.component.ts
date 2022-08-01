import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card/card.model';

@Component({
  selector: 'app-post-list-card',
  templateUrl: './post-list-card.component.html',
  styleUrls: ['./post-list-card.component.scss'],
})
export class PostListCardComponent implements OnInit {
  @Input() title: string = 'Post List';
  @Input() cards: Card[] | undefined;
  constructor() {}

  ngOnInit(): void {}
}
