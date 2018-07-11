import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowDescComponent } from './tvshow-desc.component';

describe('TvshowDescComponent', () => {
  let component: TvshowDescComponent;
  let fixture: ComponentFixture<TvshowDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
