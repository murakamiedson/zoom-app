import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
/*
  para teste do login sem google
  profile: Profile | undefined = {nome: 'Murakami', email: 'mura@gmail.com'};
*/
  profile: Profile | undefined;

  constructor(
    private router: Router,
    private loginService: AuthgoogleService
  ){}

  navegar() {
    this.router.navigate(['/paginas'])
  }

  loginGoogle(){
    this.loginService.login();
  }

  isLoggedIn() : boolean {
    const dadosGoogle = this.loginService.getLoggedProfile();
    console.log("DadosGoogle: ", dadosGoogle)
    this.profile = dadosGoogle;
    return !!this.profile;
  }

  
}
