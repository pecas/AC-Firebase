import { Component, OnInit } from '@angular/core';
declare var firebase: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Firebase';
  // clientes: Array <any> = [ 
  //   {"Apellido" : "Alonso",  "Edad" : 53,  "Id" : 1,  "Nombre" : "Eduardo"}, 
  //   {"Apellido" : "Barrios",  "Edad" : 48,  "Id" : 2,  "Nombre" : "Claudia"}
  //   ];
  clientes: Array <any> = [];
  constructor(){}

  ngOnInit() {
   this.fbGetData();
  }

  fbGetData() {
     firebase.database().ref('/usuarios').on('child_added', (snapshot) => {
      this.clientes.push(snapshot.val());
     });
  }

  fbGetDatosOrdenados(){
    let ref = firebase.database().ref('/usuarios');
      ref.orderByChild('Apellido').endAt('Barrios').on('child_added', (snapshot) => {
        this.clientes.push(snapshot.val());
      });
  }

  fbPostData(Id, Apellido, Nombre, Edad){
    firebase.database().ref('/usuarios').push({Id: Id, Apellido: Apellido, Nombre: Nombre, Edad: Edad});
  }
}
