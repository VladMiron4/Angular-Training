import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-component-view',
  templateUrl: './login-component-view.component.html',
  styleUrls: ['./login-component-view.component.scss']
})
export class LoginComponentViewComponent  {
 
  
  @Input()loginForm!:FormGroup;
  emitLoginRequest:EventEmitter<FormGroup>=new EventEmitter;
  
}
