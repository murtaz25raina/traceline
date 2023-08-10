import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuccessMessage } from '../models/shared.model';

import { Contact } from '../view/contact/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

    private readonly apiUrl = environment.apiUrl;

  isContactFormSubmitted = false;
  isSubscribeFormSubmitted = false;
  isSubmitted: boolean | undefined;

  constructor(
    private httpClient: HttpClient,
  ) {
  }


//   contactUs(formData: Contact): Observable<SuccessMessage> {
//     return this.httpClient.post<SuccessMessage>(
//       `${this.apiUrl}/v1/contact`,
//       formData
//     );
//   }

//   subscribe(email: string): Observable<SuccessMessage> {
//     return this.httpClient.post<SuccessMessage>(`${this.apiUrl}/v1/subscribe`, {
//       email,
//     });
//   }
  subscribe(email: string): Observable<SuccessMessage> {
      return new Observable((observer) => {
          setTimeout(()=>{
              observer.next({ message: email+' is added' });
              observer.complete();
          },5000)

        });
  }

  contactUs(formData: Contact): Observable<SuccessMessage> {
    return new Observable((observer) => {
        setTimeout(()=>{
            observer.next({ message: formData.name+'your email'+formData.email +'is with us.' });
            observer.complete();
        },5000)

      });
}
}
