import { Component } from '@angular/core';
import { Email } from 'src/email/mail';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-barbieri';
  vettMail:Email[]=[]
  invia(a:HTMLInputElement,oggetto:HTMLInputElement,messaggio:HTMLInputElement):boolean{
    let e = new Email(a.value, oggetto.value,messaggio.value);
    this.vettMail.push(e)
    return false;
  }
}
