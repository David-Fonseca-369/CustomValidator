import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validarQueSeanIguales } from './app.validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{

  form: FormGroup;

  constructor( private fb: FormBuilder){

  }

ngOnInit(): void {
  this.initForm();
}

initForm() {
  this.form = this.fb.group({
    'password':  ['', Validators.required],
    'confirmarPassword': ['', Validators.required]
  }, {
    validators: validarQueSeanIguales
  });
}

checarSiSonIguales(): boolean {
  return this.form.hasError('noSonIguales') &&
    this.form.get('password').dirty &&
    this.form.get('confirmarPassword').dirty;
}

}




