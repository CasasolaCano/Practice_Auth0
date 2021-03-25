import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protect',
  templateUrl: './protect.component.html',
  styles: [
  ]
})
export class ProtectComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    
  }

}
