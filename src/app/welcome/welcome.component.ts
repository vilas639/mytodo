import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService } from '../service/welcomedata.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    message ="hi";

    username2="";
  constructor(private route:ActivatedRoute,
    private welcomedataservice:  WelcomedataService) { }

  ngOnInit(): void {

  console.log(this.message);
  this.username2= this.route.snapshot.params['name'];
  }


handlewelcome()
{

  this.welcomedataservice.handlewelcomeData(1, 'vilas').subscribe(
    response => {
      console.log('Response:', response);
    },
    error => {
      console.error('Error:', error);
    }
  );


console.log("welcome message appear here");
}



}
