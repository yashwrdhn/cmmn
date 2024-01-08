import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmmnModelerComponent } from './cmmn-modeler.component';

describe('CmmnModelerComponent', () => {
  let component: CmmnModelerComponent;
  let fixture: ComponentFixture<CmmnModelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmmnModelerComponent]
    });
    fixture = TestBed.createComponent(CmmnModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
