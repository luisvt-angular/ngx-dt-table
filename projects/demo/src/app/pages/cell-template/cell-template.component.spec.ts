import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellTemplateComponent } from './cell-template.component';

describe('CellTemplateComponent', () => {
  let component: CellTemplateComponent;
  let fixture: ComponentFixture<CellTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
