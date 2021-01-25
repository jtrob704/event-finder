import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxMainComponent } from './search-box-main.component';

describe('SearchBoxMainComponent', () => {
  let component: SearchBoxMainComponent;
  let fixture: ComponentFixture<SearchBoxMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBoxMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
