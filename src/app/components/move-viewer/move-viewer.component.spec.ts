import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveViewerComponent } from './move-viewer.component';

describe('MoveViewerComponent', () => {
  let component: MoveViewerComponent;
  let fixture: ComponentFixture<MoveViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
