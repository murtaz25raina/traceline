import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  scrollPosition = 0;
  innerWidth = window.innerWidth;
  fixedHeader: boolean = true;
  elementHeight = "auto"

  pageTopLogo = "assets/images/traceline-head-logo.svg";
  ship = 'assets/images/ship.svg';
  guyWithTablet = 'assets/images/guy-with-tablet.svg';
  smilingMan='assets/images/smiling-man.svg';
  threePeopleLookingAtTablet = 'assets/images/three-people-looking-at-tablet.svg';


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  paragraph =
  'Machines? Always ready.Inventory? Optimally stocked.Defect rate? Near zero.Supply chain? Clear as day.Maintenance? Before it breaks.Growth? Data-driven, assured.Decisions? Smarter, quicker.Traceline? Your digital partner'
  paragraphArray = this.paragraph.split(".");
  tracelinePoints: string[] = [
    'MES',
    'Digital Warehouse',
    'Supply Chain Innovations',
    'Field Service Management',
    'IT Infrastructure Modernization',
  ];
  partners = [
    {src:'assets/images/partner-1.svg',class:'n-partner-lt'},
    {src:'assets/images/partner-2.svg',class:'n-partner-elgi'},
    {src:'assets/images/partner-3.svg',class:'n-partner-mak'},
    {src:'assets/images/partner-4.svg',class:'n-partner-sevenf'},
    {src:'assets/images/partner-5.svg',class:'n-partner-viseon'},
    {src:'assets/images/partner-6.svg',class:'n-partner-fss'},
    {src:'assets/images/partner-7.svg',class:'n-partner-hands'},
    {src:'assets/images/partner-8.svg',class:'n-partner-sundaram'},
  ];

  topImages = [
    {src:'assets/images/top-1.svg',class:'n-top-1'},
    {src:'assets/images/top-2.svg',class:'n-top-2'},
    {src:'assets/images/top-3.svg',class:'n-top-3'},
    {src:'assets/images/top-4.svg',class:'n-top-4'},
    {src:'assets/images/top-5.svg',class:'n-top-5'},
    {src:'assets/images/top-6.svg',class:'n-top-6'},
    {src:'assets/images/top-7.svg',class:'n-top-7'},
    {src:'assets/images/top-8.svg',class:'n-top-8'},
    {src:'assets/images/top-9.svg',class:'n-top-9'},
    {src:'assets/images/top-10.svg',class:'n-top-10'},
    {src:'assets/images/top-11.svg',class:'n-top-11'},
    {src:'assets/images/top-12.svg',class:'n-top-12'},
    {src:'assets/images/top-13.svg',class:'n-top-13'},
  ];

  hideFixedHeader = () => {
    const elementHeading = this.elementRef.nativeElement.querySelector(
      '.n-power-it-with-traceline'
    );
    if(this.innerWidth<550){
    this.renderer.removeClass(elementHeading, 'n-page-heading-mt-251');
    }
    else{
    this.renderer.removeClass(elementHeading, 'n-page-heading-mt-268');
    }
    this.fixedHeader = false;
  };
  showFixedHeader = () => {
    this.fixedHeader = true;
  };
  stopBackgroundScroll =() =>{
    this.elementHeight='100vh';
  }

  startBackgroundScroll =() =>{
    this.elementHeight='auto';
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event:Event){
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const element = this.elementRef.nativeElement.querySelector(
      '.n-page-logo-contact'
    );
    const elementHeading = this.elementRef.nativeElement.querySelector(
      '.n-power-it-with-traceline'
    );
    if (window.innerWidth > 550) {
      if (this.scrollPosition > 90) {
        this.renderer.addClass(element, 'n-make-header');
        this.renderer.addClass(elementHeading, 'n-page-heading-mt-268');
      } else {
        this.renderer.removeClass(element, 'n-make-header');
        this.renderer.removeClass(elementHeading, 'n-page-heading-mt-268');
      }
    }
    else{
      if (this.scrollPosition > 23) {
        this.renderer.addClass(element, 'n-make-header');
        this.renderer.addClass(elementHeading, 'n-page-heading-mt-251');
      } else {
        this.renderer.removeClass(element, 'n-make-header');
        this.renderer.removeClass(elementHeading, 'n-page-heading-mt-251');
      }
    }



    const paragraphContainer = this.elementRef.nativeElement.querySelector(
      '#paragraph-container'
    );
    const divs = paragraphContainer.querySelectorAll('div');

    divs.forEach((div: HTMLElement,divIndex: number) => {
      const divTop = div.getBoundingClientRect().top;
      let color = '#86868b';

      if (divTop < 300) {
        color = '#000';
      } else {
        color = '#86868b';

      }
        div.style.color = color;
      
    });
  }



}
