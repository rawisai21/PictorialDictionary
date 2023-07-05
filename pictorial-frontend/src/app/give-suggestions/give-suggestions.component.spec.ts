import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveSuggestionsComponent } from './give-suggestions.component';

describe('GiveSuggestionsComponent', () => {
  let component: GiveSuggestionsComponent;
  let fixture: ComponentFixture<GiveSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
