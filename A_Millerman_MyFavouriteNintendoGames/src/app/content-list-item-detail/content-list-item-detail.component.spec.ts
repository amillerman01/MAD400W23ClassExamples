import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListItemDetailComponent } from './content-list-item-detail.component';

describe('ContentListItemDetailComponent', () => {
  let component: ContentListItemDetailComponent;
  let fixture: ComponentFixture<ContentListItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentListItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentListItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
