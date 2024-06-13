import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();
  // //tambien podemos definirlo de la siguiente manera:
  // // public onDelete=new EventEmitter<number>;
  // onDeleteCharacter(index: number): void {
  //   //TODO: emitir el ID del personaje
  //   //console.log({index})
  //   this.onDelete.emit(index);
  // }

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log(id);

    this.onDelete.emit(id);
  }
}
