import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoPopupComponent } from './movie-info-popup.component';

describe('MovieInfoPopupComponent', () => {
  let component: MovieInfoPopupComponent;
  let fixture: ComponentFixture<MovieInfoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInfoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
