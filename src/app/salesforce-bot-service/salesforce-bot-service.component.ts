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
      script.src = 'https://colombiachef-dev-ed.develop.my.site.com/ESWimplementacionweb1721061511080/assets/js/bootstrap.min.js';
      script.onload = this.initEmbeddedMessaging;
      document.body.appendChild(script);
      this.scriptLoaded = true;
    }
  }

  private initEmbeddedMessaging() {
    try {
      if (typeof (window as any).embeddedservice_bootstrap !== 'undefined') {
        (window as any).embeddedservice_bootstrap.settings.language = 'es';
        (window as any).embeddedservice_bootstrap.init(
          '00Dbm000001euKg',
          'implementacion_web',
          'https://colombiachef-dev-ed.develop.my.site.com/ESWimplementacionweb1721061511080',
          {
            scrt2URL: 'https://colombiachef-dev-ed.develop.my.salesforce-scrt.com'
          }
        );
      } else {
        console.error('embeddedservice_bootstrap is undefined');
      }
    } catch (err) {
      console.error('Error loading Embedded Messaging: ', err);
    }
  }
  
}

