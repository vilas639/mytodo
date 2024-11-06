import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthService } from '../service/hardcode-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username1 = 'vilas';
  password ='';

  errormessgae="Invalid credntioal";

  isvalid =false;
  constructor(private router : Router
    ,private hardcodeservice :HardcodeAuthService) { }

  ngOnInit(): void {
  }

  handlebutton()
  {

    console.log('username is'+this.username1);
      
    console.log("before login"+this.isUserlogin());
       if(this.hardcodeservice.hardcodebutton(this.username1,this.password))
    //if(this.username1=="vilas" && this.password=="Ram")
    {
      sessionStorage.setItem("username",this.username1);
      //nevigate to the welcome page

      this.router.navigate(['welcome',this.username1]);
           this.isvalid =false;
    }
    else
    { 
        this.isvalid =true;
    }
  }

  isUserlogin()
  {
    let user=sessionStorage.getItem("username");
    return !(user===null);
  }

}
