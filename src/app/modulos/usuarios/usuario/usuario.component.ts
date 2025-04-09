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
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nomeFormControl = new FormControl('', [Validators.required]);

  constructor(private service: UsuarioService){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  salvar(){

    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
      console.log('valores digitados: ', this.camposForm.value)
      console.log('é valido?', this.camposForm.valid)
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
