import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDtTableComponent } from './ngx-dt-table.component';

describe('NgxDtTableComponent', () => {
  let component: NgxDtTableComponent;
  let fixture: ComponentFixture<NgxDtTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDtTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
