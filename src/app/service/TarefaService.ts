import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Tarefa} from "../model/Tarefa";

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = 'http://localhost:8080/tarefa';

  constructor(private http: HttpClient) { }


  buscarTodasTarefas():Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }


  inserirTarefa(tarefa: Tarefa) {
    return this.http.post(this.apiUrl,tarefa);
  }

  removerPorId(idTarefa: number):Observable<Tarefa[]> {
    return this.http.delete<Tarefa[]>(`${this.apiUrl}/${idTarefa}`);
  }


  atualizar(tarefa: Tarefa) {
    return this.http.put(`${this.apiUrl}/${tarefa.id}`,tarefa);
  }

}
