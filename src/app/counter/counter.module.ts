import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtoDisComponent } from "./butto-dis/butto-dis.component";
import { ButtonAddComponent } from './button-add/button-add.component';
import { CounterComponent } from "./counter.component";

@NgModule({
    declarations: [CounterComponent,ButtonAddComponent,ButtoDisComponent],
    imports: [CommonModule],
    exports:[CounterComponent],
    
})
export class CounterModule{

}