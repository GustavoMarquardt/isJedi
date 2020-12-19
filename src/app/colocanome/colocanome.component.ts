import { Student } from 'C:/Users/gusta/jedi-academy/src/app/student/student.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colocanome',
  templateUrl: './colocanome.component.html',
  styleUrls: ['./colocanome.component.css']
})
export class ColocanomeComponent implements OnInit {

  constructor() { }

  @Output () estudanteevento = new EventEmitter <any> ();
  @Output () change = new EventEmitter <boolean> ();
  ngOnInit(): void {
  }


    boleana : boolean = false
   envia_estudante(digita:string, box:boolean){

      this.estudanteevento.emit ({digita,box})
        
   }
      // troca os valores da chekbox para true se for false e para false se for true quando clica
   ejedai (){
      if(this.boleana == false){
        this.boleana = true
      } else{
        this.boleana = false
      }     
          this.change.emit(this.boleana);
          console.log(this.boleana)
   }
      
 
}
