import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthService {

  constructor() { }


   hardcodebutton(username1: string,password: string)
  {

    console.log("username is"+username1);

    if(username1=="vilas" && password=="Ram")
    {
      return true;
    }
    else
    { 
        return false;
    }
  }

  logouthandle()
  {
    sessionStorage.removeItem("username");
  }

  isUserlogin()
  {
    let user=sessionStorage.getItem("username");
    return !(user===null);
  }
}
