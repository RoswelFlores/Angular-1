import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
//Empezar el testing hacemos referencia al componente
describe("CounterComponent",()=>{
    //Antes de ejecutar las pruebas 
    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [CounterComponent],
        }).compileComponents();
    });
    
    it("Se debe crear el componente counter",()=>{
        const fixture =TestBed.createComponent(CounterComponent)

        expect (fixture.componentInstance).toBeTruthy();
    })



    //El tipo de prueba queremos compobar que contador sea = 5 
    it("valor incial del contador es 5",()=> {
        const counter = new CounterComponent()

        expect(counter.contador).toBe(5);
    });
});