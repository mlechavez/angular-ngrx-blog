import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWidgetComponent } from './about-widget.component';

describe('AboutWidgetComponent', () => {
  let component: AboutWidgetComponent;
  let fixture: ComponentFixture<AboutWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
