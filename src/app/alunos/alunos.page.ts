import { Component, OnInit } from '@angular/core';
import { AlunosServiceService } from '../alunos-service.service';
import { Alunos } from '../model/alunos.model';
@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {
 
  private index: number = 0;
  private readonly offset: number = 5;
  
  usersTotal: any;
  users: Alunos[];
  constructor(public alunosservice :AlunosServiceService ) { }

  async ngOnInit() {
    let users = await this.alunosservice.getUsers();
    let usersFinal = [];
    for (let i=this.index;i<this.offset;i++) {
      usersFinal.push(users[i]);
    }
    this.usersTotal = users;
    this.users = usersFinal;
    this.index += this.offset;    
  }

  pegarDados(event) {
    console.log("aqui");
    setTimeout(() => {
      //let usersFinal = [];
      console.log(this.index);
      console.log(this.usersTotal);
      for (let i=this.index;i<(this.index+this.offset);i++) {
        this.users.push(this.usersTotal[i]);                
      }
      
      event.target.complete();
      if (this.index >= 9) {
        event.target.disabled = true;
      }
    }, 500);
  }

  async salvarUsuario() {
    let usuario: Alunos = {
      id:0,
      nome:'',
      sobrenome:'',
      ra:'',
      idade:''
  }
    console.log(usuario);
    await this.alunosservice.salvarUser(usuario.id.toString(),usuario);
  }

  async pegarUsuario() {
    this.alunos = await this.alunosservice.getUser("5");
  }

  }

}
