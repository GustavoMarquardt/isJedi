import { Student } from './student/student.model';
import { Component, Input } from '@angular/core';
import { compileNgModule } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  @Input()  Student : any 

  students: Student[] = [
    { name: 'Luke', isJedi: true, temple: 'Coruscan' },
    { name: 'Leai', isJedi: false },
    { name: 'Han', isJedi: false },
  ]
  variavel!: any;

  // adiciona alunos
  addStudent(Student: any) {
      console.log(Student)
    let temple: string
    if (Student.box == true) { temple = 'Coruscant' }
    else { temple = '' }

    let new_student: Student = {
      name: Student.digita, isJedi: Student.box, temple: temple
    }
  
    this.students.push(new_student);
  }

  remove_estudante(remove: string) {
    // "for" andando dentro dos students
    this.students.forEach(function (estudante, indice, vetor) {


      if (estudante.name == remove) {

        vetor.splice(indice, 1)
      }
    }

    )

  }

}

