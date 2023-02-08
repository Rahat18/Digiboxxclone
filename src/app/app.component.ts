//import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  hide = true;


 loginForm!:FormGroup;
 
 loginUserData = {}
  constructor(private formBuilder:FormBuilder ,
               private _http: HttpClient ,
              private router: Router ,
              private auth : AuthService){};

//   ngOnInit(){
//     this.loginForm = new FormGroup(
//       {
//         email : new FormControl('' , [Validators.required , Validators.email]) ,
//         password : new FormControl ('' , [Validators.required , Validators.minLength(6)])
//       }
//     );
//     }

 responseData :any
ngOnInit(){
  this.loginForm = this.formBuilder.group({
    email:[''],
    password:['']
  })
}

   onLogin(){
   let details = this.auth.loginUser(this.loginForm.value);
   this.responseData = details
   console.log(details)
  console.log(this.loginForm.value)

  // if(details)
  // alert("Login Done")
  // else
  // console.log("Failed")
}

}
