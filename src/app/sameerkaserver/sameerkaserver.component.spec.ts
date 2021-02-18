import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SameerkaserverComponent } from './sameerkaserver.component';

describe('SameerkaserverComponent', () => {
  let component: SameerkaserverComponent;
  let fixture: ComponentFixture<SameerkaserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SameerkaserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SameerkaserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
