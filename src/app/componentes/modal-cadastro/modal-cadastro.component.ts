import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tarefa} from "../../model/Tarefa";
import {TarefaService} from "../../service/TarefaService";

@Component({
    selector: 'app-modal-cadastro',
    templateUrl: './modal-cadastro.component.html',
    styleUrls: ['./modal-cadastro.component.css']
})
export class ModalCadastroComponent {

    @Input() tarefa: Tarefa = new Tarefa(0, '', false);
    @Output() fecharModal: EventEmitter<void> = new EventEmitter<void>();


    constructor(private tarefaService: TarefaService) {
    }

    gravar() {

        if (this.tarefa.id == 0) {
            this.tarefaService.inserirTarefa(this.tarefa)
                .subscribe(dados => this.fechar())
        } else {
            this.tarefaService.atualizar(this.tarefa)
                .subscribe(dados => this.fechar())
        }
    }

    fechar() {
        this.fecharModal.emit();
    }

}
