import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

import {Student} from './student.model'


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

      @Input() student : Student ={name:'', isJedi : true, temple: ''}
      // EVENTO
      @Output () deleta_evento = new EventEmitter <string> ();
 
  constructor() { }
  ngOnInit(): void {
  }
      // FUNÇÃO 
      envia_deleta(){
        
        this.deleta_evento.emit(this.student.name)
    }
}
