import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoDisComponent } from './butto-dis.component';

describe('ButtoDisComponent', () => {
  let component: ButtoDisComponent;
  let fixture: ComponentFixture<ButtoDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtoDisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtoDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
