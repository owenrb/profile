import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidingPrinciplesComponent } from './guiding-principles.component';

describe('GuidingPrinciplesComponent', () => {
  let component: GuidingPrinciplesComponent;
  let fixture: ComponentFixture<GuidingPrinciplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidingPrinciplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidingPrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
