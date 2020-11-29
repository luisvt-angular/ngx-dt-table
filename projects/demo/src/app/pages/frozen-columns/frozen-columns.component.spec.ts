import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenColumnsComponent } from './frozen-columns.component';

describe('FrozenColumnsComponent', () => {
  let component: FrozenColumnsComponent;
  let fixture: ComponentFixture<FrozenColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrozenColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
