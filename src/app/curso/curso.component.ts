import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {

  //Vetor
  vetor: Curso[] = [];

  //Objeto da classe Curso
  curso = new Curso();

  // Construtor
  constructor(private curso_servico:CursoService) { }

  // Inicializdor
  ngOnInit() {
    this.selecionar();
  }

  // Cadastrar
  cadastrar(): void {
    alert("Cadastrar")
  }

  // Selecionar
  selecionar(){
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    );
  }

  // Alterar
  alterar(): void {
    alert("Alterar")
  }

  // Remover
  remover(): void {
    alert("Remover")
  }
}
