import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { cliente } from './cliente.model';
declare var firebase: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  // clientes: Array <any> = [ 
  //   {"Apellido" : "Alonso",  "Edad" : 53,  "Id" : 1,  "Nombre" : "Eduardo"}, 
  //   {"Apellido" : "Barrios",  "Edad" : 48,  "Id" : 2,  "Nombre" : "Claudia"}
  //   ];

   clientes: Array <any> = [];
  constructor(private dataservice: DataService){}

  ngOnInit() {
   this.fbGetData();
  }

  fbGetData() {
     firebase.database().ref('/').on('child_added', (snapshot) => {
      this.clientes.push(snapshot.val());
     });
 //   this.dataservice.getDatos();
  }
}
