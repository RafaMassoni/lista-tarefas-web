import {Component, Input} from '@angular/core';

@Component({
  selector: 'item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css']
})
export class ItemListaComponent {

  @Input() concluido: boolean = false;
  @Input() descricao: string = '';


}
