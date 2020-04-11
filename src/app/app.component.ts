import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-docker';
  usuarios: any[]; 

  constructor(private usuarioService: UsuarioService){
  }
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
      data=>{
       // console.log(data);
        this.usuarios = <any>data;
      }, error=>{
      }      
    );
  }
}
