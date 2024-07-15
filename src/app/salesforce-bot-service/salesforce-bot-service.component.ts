import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-salesforce-bot-service',
  standalone: true,
  imports: [],
  templateUrl: './salesforce-bot-service.component.html',
  styleUrl: './salesforce-bot-service.component.css'
})

@Injectable({
  providedIn: 'root'
})
export class SalesforceBotServiceComponent {
  private scriptLoaded = false;

  constructor() {}

  loadScript() {
    if (!this.scriptLoaded) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://colombiachef-dev-ed.develop.my.site.com/ESWimplementacionbot1713187491532/assets/js/bootstrap.min.js';
      script.onload = this.initEmbeddedMessaging;
      document.body.appendChild(script);
      this.scriptLoaded = true;
    }
  }

  private initEmbeddedMessaging() {
    try {
      (window as any).embeddedservice_bootstrap.settings.language = 'es';
      (window as any).embeddedservice_bootstrap.init(
        '00Dbm000001euKg',
        'implementacion_bot',
        'https://colombiachef-dev-ed.develop.my.site.com/ESWimplementacionbot1713187491532',
        {
          scrt2URL: 'https://colombiachef-dev-ed.develop.my.salesforce-scrt.com'
        }
      );
    } catch (err) {
      console.error('Error loading Embedded Messaging: ', err);
    }
  }
}

