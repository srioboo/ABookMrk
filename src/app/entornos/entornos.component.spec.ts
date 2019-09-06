import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntornosComponent } from './entornos.component';

describe('EntornosComponent', () => {
  let component: EntornosComponent;
  let fixture: ComponentFixture<EntornosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntornosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntornosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
