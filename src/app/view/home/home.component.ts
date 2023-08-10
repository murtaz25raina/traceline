import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tracelinePoints:string[] = [
    "MES",
    "Digital Warehouse",
    "Supply Chain Innovations",
    "Field Service Management",
    "IT Infrastructure Modernization"
  ]
  partners :string[]=[
    'assets/images/partner-1.png',
    'assets/images/partner-2.png',
    'assets/images/partner-3.png',
    'assets/images/partner-4.png',
    'assets/images/partner-5.png',
    'assets/images/partner-6.png',
    'assets/images/partner-7.png',
    'assets/images/partner-8.png',
  ]
  
}
