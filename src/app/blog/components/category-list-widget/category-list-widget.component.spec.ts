import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListWidgetComponent } from './category-list-widget.component';

describe('CategoryListWidgetComponent', () => {
  let component: CategoryListWidgetComponent;
  let fixture: ComponentFixture<CategoryListWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
