import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { REGEX_PATTERNS } from "src/app/constants/constants";
import { SharedService } from "src/app/services/shared.service";
import { Contact } from "./contact.interface";
import { Location } from '@angular/common';

@Component({
    selector:'app-contact',
    templateUrl:'./contact.component.html',
    styleUrls:['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  @Input() showFixedHeaderFunction: (() => void) | undefined;

  isOpen: boolean = false;
  contactForm!: FormGroup;

  isFormSubmitted!: boolean;
  isLoading = false;
  isSubmitted = this.sharedService.isSubmitted;

  constructor(
    private sharedService: SharedService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    // this.showFixedHeaderFunction = () => {};
    this.updateFormSubmittedStatus();
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.pattern(REGEX_PATTERNS.email),
        ],
      ],
    });
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      this.isLoading = true;
      const contactData: Contact = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value
      };
      this.sharedService.contactUs(contactData).subscribe({
        next: () => {
          this.sharedService.isContactFormSubmitted = true;
          this.isLoading = false;
          this.updateFormSubmittedStatus();
          this.contactForm.disable();
          this.contactForm.reset();
          this.sharedService.isSubmitted = true;
          this.isSubmitted = true;
        },
        error: () => {
          this.sharedService.isContactFormSubmitted = false;
          this.isLoading = false;
          this.updateFormSubmittedStatus();
        },
      });
    }
  }

  private updateFormSubmittedStatus(): void {
    this.isFormSubmitted = this.sharedService.isContactFormSubmitted;
  }

  openComponent() {
    console.log('tf')
    this.isOpen = true;
  }

  closeComponent() {
    this.isOpen = false;
  }

  onBack() {
    this.location.back();
  }

  showFixedHeader() {
    if (this.showFixedHeaderFunction) {
      this.showFixedHeaderFunction();
    }
  }
  
}