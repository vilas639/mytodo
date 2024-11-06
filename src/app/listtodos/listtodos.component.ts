import { Component, OnInit } from '@angular/core';

export class todo {

  constructor(
    public id:number,
    public description:string,
    public iscompleted :boolean,
    public targetdate: Date
  )
  {

  }
}


@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {


    
    listdata=[

      new todo(1,"do the spring security",false,new Date()),
        new todo(2,"do the spring",false,new Date()),
          new todo(3,"do the shibernate",false,new Date()),
            new todo(4,"do the microservices",false,new Date()),
              new todo(5,"do the Junit",false,new Date()),
    //    {

    //   id: 1,
    //   description :"do the spring security"
    // },
    //  {

    //   id: 2,
    //   description :"sping"
    // },
    //  {

    //   id: 3,
    //   description :"hibernate"
    // },
    //  {

    //   id: 4,
    //   description :"microservices"
    // }

    ];

    data1 = {

      id: 1,
      description :"do the spring security"
    }

  constructor() { }

  ngOnInit(): void {
  }

}
