import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { REGEX_PATTERNS } from "src/app/constants/constants";
import { SharedService } from "src/app/services/shared.service";

@Component({
    selector:'app-contactus-footer',
    templateUrl:"./contactus-footer.component.html",
    styleUrls:['contactus-footer.component.scss']
})
export class ContactUsFooterComponent{
    email = new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(REGEX_PATTERNS.email),
      ]);
      isFormSubmitted = false;
      isLoading = false;
    
      constructor(private sharedService: SharedService) {
        this.updateFormSubmittedStatus();
      }
    
      private updateFormSubmittedStatus(): void {
        this.isFormSubmitted = this.sharedService.isSubscribeFormSubmitted;
      }

      scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      toNetcon = () =>{
        window.open("https://netcontechnologies.com","_blank");
      }

      openLinkedin=()=>{
        window.open("https://www.linkedin.com/company/netcon-technologies","_blank")
      }

      openTwitter = () =>{
        window.open('https://twitter.com/Netcondigital','_blank')
      }

      privacyPolicy = () =>{
        window.open("https://netcontechnologies.com/privacy_policy","_blank");
      }

      cookiesPolicy = () =>{
        window.open("https://netcontechnologies.com/cookie_policy","_blank");
      }
    
      onSubscribe(): void {
        if (this.email.valid && (typeof this.email.value === 'string')) {
          this.isLoading = true;
          this.sharedService.subscribe(this.email.value).subscribe({
            next: (data) => {
                console.log(data);
              this.sharedService.isSubscribeFormSubmitted = true;
              this.isLoading = false;
              this.updateFormSubmittedStatus();
              this.email.reset();
              this.email.disable();
            },
            error: () => {
              this.sharedService.isSubscribeFormSubmitted = false;
              this.isLoading = false;
              this.updateFormSubmittedStatus();
            },
          });
        }
      }
}