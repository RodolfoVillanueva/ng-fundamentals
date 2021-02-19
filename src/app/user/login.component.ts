import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService} from './auth.service'

@Component({
    templateUrl:'./login.component.html',
    styles:[`
    em{ float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    `]
})

export class LoginComponent{
    username
    password
    mouseoverLogin

    constructor(private authService:AuthService, private router:Router){

    }
    login(formValues){
        this.authService.loginUser(formValues.name, formValues.password)
        this.router.navigate(['events'])
    }
    cancel(){
        this.router.navigate(['events'])
    }
}