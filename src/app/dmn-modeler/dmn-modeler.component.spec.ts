import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmnModelerComponent } from './dmn-modeler.component';

describe('DmnModelerComponent', () => {
  let component: DmnModelerComponent;
  let fixture: ComponentFixture<DmnModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DmnModelerComponent]
    });
    fixture = TestBed.createComponent(DmnModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
