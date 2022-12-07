import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumettiComponent } from './fumetti.component';

describe('FumettiComponent', () => {
  let component: FumettiComponent;
  let fixture: ComponentFixture<FumettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FumettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FumettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
