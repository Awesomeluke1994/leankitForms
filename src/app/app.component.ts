import {Component, Input} from '@angular/core';
import { LeankitServiceService } from './leankit-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() username: string = "Enter email"
  @Input() password: string = ""


  constructor(
    private leankit: LeankitServiceService
  ){}

  title = 'app';


  public test() {
    let base64Auth = btoa(this.username+":"+this.password)
    let response = this.leankit.getAccount(base64Auth);
  }
}
