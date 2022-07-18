import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-butto-dis',
  templateUrl: './butto-dis.component.html',
  styleUrls: ['./butto-dis.component.css']
})
export class ButtoDisComponent {
  @Input()
  contador:number = 0;

  @Output()
  onLess:EventEmitter<number>= new EventEmitter()


  less(){
    this.contador--;
    this.onLess.emit(this.contador);
   
  }
}
