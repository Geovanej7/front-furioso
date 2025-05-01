import { Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required]
    }, { validators: this.validarSenhas });
  }

  // Getter para facilitar o uso no template
  get email() { return this.formulario.get('email')!; }
  get nome() { return this.formulario.get('nome')!; }
  get senha() { return this.formulario.get('senha')!; }
  get confirmarSenha() { return this.formulario.get('confirmarSenha')!; }

  // Validação customizada
  validarSenhas(group: AbstractControl): { [key: string]: boolean } | null {
    const senha = group.get('senha')?.value;
    const confirmar = group.get('confirmarSenha')?.value;
    if (senha !== confirmar) {
      group.get('confirmarSenha')?.setErrors({ senhaMismatch: true });
      return { senhaMismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      // Aqui você pode enviar os dados para o backend
    }
  }
}