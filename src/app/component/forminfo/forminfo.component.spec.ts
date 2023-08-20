import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminfoComponent } from './forminfo.component';

describe('ForminfoComponent', () => {
  let component: ForminfoComponent;
  let fixture: ComponentFixture<ForminfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForminfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
