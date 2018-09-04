import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCacheComponent } from './pre-cache.component';

describe('PreCacheComponent', () => {
  let component: PreCacheComponent;
  let fixture: ComponentFixture<PreCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
