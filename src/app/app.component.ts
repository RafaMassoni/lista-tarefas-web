import {Component, OnInit} from '@angular/core';
import {Tarefa} from "./model/Tarefa";
import {TarefaService} from "./service/TarefaService";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    listaDeTarefas: Tarefa[] = [];
    mostrarModalEdicao = false;
    tarefaParaEditar: Tarefa = new Tarefa(0, '', false);

    constructor(private tarefaService: TarefaService) {
    }

    ngOnInit() {
        this.buscarTodasTarefas();
    }

    buscarTodasTarefas() {
        this.tarefaService.buscarTodasTarefas()
            .subscribe((data: Tarefa[]) => this.listaDeTarefas = data);
    }


    abrirModalParaCadastro() {
        this.tarefaParaEditar = new Tarefa(0,'',false);
        this.mostrarModalEdicao = true;
    }

    abrirModalEdicao(tarefa: Tarefa) {


        this.tarefaParaEditar = new Tarefa(
            tarefa.id
            , tarefa.descricao,
            tarefa.concluido);


        this.mostrarModalEdicao = true;
    }


    fecharModalEdicao() {
        this.mostrarModalEdicao = false;
        this.buscarTodasTarefas();
    }

    removerTarefaPorId(idTarefa: number) {
        this.tarefaService.removerPorId(idTarefa)
            .subscribe(() => this.buscarTodasTarefas());

    }

}
