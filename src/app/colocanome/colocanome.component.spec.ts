import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColocanomeComponent } from './colocanome.component';

describe('ColocanomeComponent', () => {
  let component: ColocanomeComponent;
  let fixture: ComponentFixture<ColocanomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColocanomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColocanomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
