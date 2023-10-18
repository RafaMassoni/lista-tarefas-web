export class Tarefa {
  id: number;
  descricao: string;
  concluido: boolean;

  constructor(id: number, descricao: string, concluido: boolean) {
    this.id = id;
    this.descricao = descricao;
    this.concluido = concluido;
  }
}
