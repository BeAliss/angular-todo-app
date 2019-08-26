import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFotoComponent } from './add-foto.component';

describe('AddFotoComponent', () => {
  let component: AddFotoComponent;
  let fixture: ComponentFixture<AddFotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
