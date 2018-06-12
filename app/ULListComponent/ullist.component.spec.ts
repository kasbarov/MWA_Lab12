import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ULListComponent } from './ullist.component';

describe('ULListComponent', () => {
  let component: ULListComponent;
  let fixture: ComponentFixture<ULListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ULListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ULListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
