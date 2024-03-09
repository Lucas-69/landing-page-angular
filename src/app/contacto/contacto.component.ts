import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  formularioContact: FormGroup
  tipoDni: string = 'DNI';

  constructor(private form: FormBuilder){
    
    this.formularioContact = this.form.group({
      nombre: ['' , [Validators.required, Validators.minLength(3)]],
      apellido: ['' , [Validators.required, Validators.minLength(3)]],
      tipoDni: ['',],
      dni:[''],
      email: ['', [Validators.required ,Validators.email]]
    })
  }

  ngOnInit(): void {
      this.formularioContact.get('tipoDni')?.valueChanges.subscribe( value =>{
        this.tipoDni = value
      })
  }

  hasErrors( controlName: string, errorType: string){
    return this.formularioContact.get(controlName)?.hasError(errorType) && this.formularioContact.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formularioContact);
  }

}
