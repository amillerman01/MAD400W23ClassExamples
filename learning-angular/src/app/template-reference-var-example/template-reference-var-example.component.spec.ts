import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVarExampleComponent } from './template-reference-var-example.component';

describe('TemplateReferenceVarExampleComponent', () => {
  let component: TemplateReferenceVarExampleComponent;
  let fixture: ComponentFixture<TemplateReferenceVarExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReferenceVarExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateReferenceVarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
