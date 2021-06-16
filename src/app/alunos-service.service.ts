import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alunos } from './model/alunos.model';
@Injectable({
  providedIn: 'root'
})
export class AlunosServiceService {

  constructor(private http: HttpClient) {

   }
   async getUsers() {
    let users = await this.http.get<Alunos>("./assets/mydata.json").toPromise();
    // this.users = usersRequest;
    return users;
  }
  
}
