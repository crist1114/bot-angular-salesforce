import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforceBotServiceComponent } from './salesforce-bot-service.component';

describe('SalesforceBotServiceComponent', () => {
  let component: SalesforceBotServiceComponent;
  let fixture: ComponentFixture<SalesforceBotServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesforceBotServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesforceBotServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
