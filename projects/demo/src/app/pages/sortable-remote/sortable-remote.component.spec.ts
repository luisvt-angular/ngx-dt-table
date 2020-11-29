import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableRemoteComponent } from './sortable-remote.component';

describe('SortableRemoteComponent', () => {
  let component: SortableRemoteComponent;
  let fixture: ComponentFixture<SortableRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortableRemoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
