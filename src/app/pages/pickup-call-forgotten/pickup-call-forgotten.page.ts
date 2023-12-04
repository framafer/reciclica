import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup-call-forgotten',
  templateUrl: './pickup-call-forgotten.page.html',
  styleUrls: ['./pickup-call-forgotten.page.scss'],
})
export class PickupCallForgottenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newPickupCall(){
    this.router.navigate(['/home']);
  }

  

}
