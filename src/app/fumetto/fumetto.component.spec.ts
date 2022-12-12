import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumettoComponent } from './fumetto.component';

describe('FumettoComponent', () => {
  let component: FumettoComponent;
  let fixture: ComponentFixture<FumettoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FumettoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FumettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
