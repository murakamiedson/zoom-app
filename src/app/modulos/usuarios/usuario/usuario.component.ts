import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UsuarioComponent {
  camposForm!: FormGroup;
  nomeFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);  
  senhaFormControl = new FormControl('', [Validators.required]);
  statusFormControl = new FormControl('');
  registroFormControl = new FormControl('');
 

  constructor(private service: UsuarioService){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
      status: new FormControl(''),
      registroProfissional: new FormControl('')
    })
  }

  save(){

    console.log('save() chamado: ' + this.camposForm.value);
    this.camposForm.markAllAsTouched();

    console.log('valores digitados: ', this.camposForm.value)
    console.log('é valido?', this.camposForm.valid)

    if(this.camposForm.valid){
      this.service
      .save(this.camposForm.value)
      .subscribe({
        next: usuario => {
          console.log('Salvo com sucesso!', usuario);
          this.camposForm.reset();
        },
        error: erro => console.error('Ocorreu um erro: ', erro)
      });
    }
  }

}
