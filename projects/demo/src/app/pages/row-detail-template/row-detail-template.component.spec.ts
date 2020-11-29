import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDetailTemplateComponent } from './row-detail-template.component';

describe('RowDetailTemplateComponent', () => {
  let component: RowDetailTemplateComponent;
  let fixture: ComponentFixture<RowDetailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowDetailTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowDetailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
