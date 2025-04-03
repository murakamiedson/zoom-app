import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UsuarioComponent {
  camposForm!: FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nomeFormControl = new FormControl('', [Validators.required]);

  constructor(){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  salvar(){
    console.log('valores digitados: ', this.camposForm.value)
    console.log('é valido?', this.camposForm.valid)
  }

}
