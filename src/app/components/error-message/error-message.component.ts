import { Component, Input, OnInit, Optional } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {

  @Input() message!: string;
  @Input() @Optional() field!: AbstractControl | null;  
    
  @Input() errorType!: string;

  constructor() { }

  ngOnInit() {
    console.log(this.message);
  }

  shouldShowComponent() {
    if (this.field && this.field.errors?.[this.errorType] && this.field.touched) {
      
      return true;
    }else{
      
      return false; 
    
    }
   
  }
}
