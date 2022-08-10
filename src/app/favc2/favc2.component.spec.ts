import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Favc2Component } from './favc2.component';

describe('Favc2Component', () => {
  let component: Favc2Component;
  let fixture: ComponentFixture<Favc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Favc2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Favc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
