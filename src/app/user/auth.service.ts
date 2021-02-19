import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()
export class AuthService{
    currentUser:IUser
    loginUser(name: string, password: string){
       this.currentUser = {
           id:1,
           userName: 'userName',
           lastName: 'Villanueva',
           firstName: 'Rodolfo'

       }
    
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName=firstName
        this.currentUser.lastName=lastName
    }
}