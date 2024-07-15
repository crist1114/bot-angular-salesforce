import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalesforceBotServiceComponent } from './salesforce-bot-service/salesforce-bot-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private salesforceBotService: SalesforceBotServiceComponent) {}

  ngOnInit(): void {
    this.salesforceBotService.loadScript();
  }


}
