import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtTableComponent } from './dt-table.component';

describe('TableComponent', () => {
  let component: DtTableComponent;
  let fixture: ComponentFixture<DtTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
