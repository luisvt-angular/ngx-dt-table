import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRemoteComponent } from './basic-remote.component';

describe('BasicRemoteComponent', () => {
  let component: BasicRemoteComponent;
  let fixture: ComponentFixture<BasicRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicRemoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
