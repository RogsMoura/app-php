import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})

export class CursoComponent implements OnInit {

  // Vetor
  vetor: Curso[] = [];

  // Objeto da classe Curso
  curso = new Curso();
  
  // Construtor
  constructor(private curso_servico: CursoService) { }

  // Inicializdor
  ngOnInit() {
    this.selecionar();
  }

  // Cadastrar
  cadastro(){
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      (res:Curso[]) => {
        
        // Adicionando dados ao vetor
        this.vetor = res;

        // Limpar os atributos
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;

        // Atualizar a listagem
        this.selecionar();
      }
    )
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
  alterar(){
    this.curso_servico.atualizarCurso(this.curso).subscribe(
      (res) => {

        // Atualizar vetor
        this.vetor = res;

        // Limpar objeto
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;

        // Atualiza listagem
        this.selecionar();
      }
    )
  }

  // Remover
  remover(){
    this.curso_servico.removerCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;
      }
    )
  }

  // Selecionar curso
  selecionarCurso(c: Curso) {
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }
}
