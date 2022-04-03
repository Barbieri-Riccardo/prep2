import { Component, OnInit, Input } from '@angular/core';
import { Email } from 'src/email/mail';
@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
   
  }
  @Input() email: Email = null!;
}
