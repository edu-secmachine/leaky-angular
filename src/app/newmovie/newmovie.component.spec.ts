import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmovieComponent } from './newmovie.component';

describe('NewmovieComponent', () => {
  let component: NewmovieComponent;
  let fixture: ComponentFixture<NewmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
