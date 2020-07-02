import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreeminenceComponent } from './preeminence.component';

describe('PreeminenceComponent', () => {
  let component: PreeminenceComponent;
  let fixture: ComponentFixture<PreeminenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreeminenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreeminenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
