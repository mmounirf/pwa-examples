import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineWithCacheComponent } from './offline-with-cache.component';

describe('OfflineWithCacheComponent', () => {
  let component: OfflineWithCacheComponent;
  let fixture: ComponentFixture<OfflineWithCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineWithCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineWithCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
