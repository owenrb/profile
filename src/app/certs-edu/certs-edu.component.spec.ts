import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertsEduComponent } from './certs-edu.component';

describe('CertsEduComponent', () => {
  let component: CertsEduComponent;
  let fixture: ComponentFixture<CertsEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertsEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertsEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
