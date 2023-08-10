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