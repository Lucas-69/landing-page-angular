import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent {
  
  @Input() tipoDni: string = 'DNI';

  formularioDocumento: FormGroup

  constructor(private form: FormBuilder){
    
    this.formularioDocumento = this.form.group({
      dni:[''],
     })
  }


  hasErrors( controlName: string, errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched
  }

}
