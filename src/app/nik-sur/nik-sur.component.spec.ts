import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikSurComponent } from './nik-sur.component';

describe('NikSurComponent', () => {
  let component: NikSurComponent;
  let fixture: ComponentFixture<NikSurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NikSurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NikSurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
