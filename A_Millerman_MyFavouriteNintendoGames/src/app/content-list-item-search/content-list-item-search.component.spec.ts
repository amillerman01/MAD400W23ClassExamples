import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListItemSearchComponent } from './content-list-item-search.component';

describe('ContentListItemSearchComponent', () => {
  let component: ContentListItemSearchComponent;
  let fixture: ComponentFixture<ContentListItemSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentListItemSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentListItemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
