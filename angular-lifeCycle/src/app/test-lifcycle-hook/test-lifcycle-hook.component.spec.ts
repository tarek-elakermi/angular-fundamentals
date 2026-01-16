import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLifcycleHookComponent } from './test-lifcycle-hook.component';

describe('TestLifcycleHookComponent', () => {
  let component: TestLifcycleHookComponent;
  let fixture: ComponentFixture<TestLifcycleHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLifcycleHookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestLifcycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
