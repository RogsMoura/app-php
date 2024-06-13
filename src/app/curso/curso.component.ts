import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit {

  // URL base
  url = "http://localhost/api/php/"

  // Veto de cursos
  vetor: Curso[] = [];
  
  // Construtor
  constructor(private http: HttpClient) { }

  // Inicializdor
  ngOnInit() {
  }

  // Cadastrar
  cadastrar(): void {
    alert("Cadastrar")
  }

  // Selecionar
  selecionar(): void {
    alert("Selecionar")
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
