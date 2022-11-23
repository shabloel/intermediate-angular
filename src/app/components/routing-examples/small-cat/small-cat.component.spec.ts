import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCatComponent } from './small-cat.component';

describe('SmallCatComponent', () => {
  let component: SmallCatComponent;
  let fixture: ComponentFixture<SmallCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
