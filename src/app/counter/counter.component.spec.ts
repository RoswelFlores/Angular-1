import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtoDisComponent } from './butto-dis/butto-dis.component';
//Empezar el testing hacemos referencia al componente
describe("CounterComponent Unit ",()=>{
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
    it("Debe crear el texto Counter : 5",()=>{
        const fixture =TestBed.createComponent(CounterComponent)

        fixture.detectChanges()
        //Tipo de dato que necesitamos que sea es HTMlElement
        const compiled: HTMLElement = fixture.nativeElement
         console.log(compiled)
        expect (compiled.querySelector("h1")?.textContent).toEqual("Contador: 5");
    })



    //El tipo de prueba queremos compobar que contador sea = 5 
    it("valor incial del contador es 5",()=> {
        const counter = new CounterComponent()

        expect(counter.contador).toBe(5);
    });
});

describe("Integration Testing",() => {

    let component: CounterComponent;
    let fixture: ComponentFixture<CounterComponent>; 

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [CounterComponent,ButtonAddComponent,ButtoDisComponent],
        }).compileComponents();
    });

    beforeEach(()=>{
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("Evento click", () =>{
        const compiled : HTMLElement= fixture.nativeElement;
                                //Tiene que existir si no revienta para eso el !
        const counterValue = compiled.querySelector("h1")!;

                            //permitir interactuar con el boton y obtener parte nativa en html
        const btnAdd : HTMLElement = fixture.debugElement.nativeElement.querySelector("#add");
        
            btnAdd.click();

        //Despues manipular algo debo usar el detected value
        fixture.detectChanges();
        //Espero que mi contador despues del click sea 6
        expect(counterValue?.textContent).toEqual("Contador: 6")
    })
    it("Evento click Dis", () =>{
        const compiled : HTMLElement= fixture.nativeElement;
                                //Tiene que existir si no revienta para eso el !
        const counterValue = compiled.querySelector("h1")!;

                            //permitir interactuar con el boton y obtener parte nativa en html
        const btnAdd : HTMLElement = fixture.debugElement.nativeElement.querySelector("#dis");
        
            btnAdd.click();

        //Despues manipular algo debo usar el detected value
        fixture.detectChanges();
        //Espero que mi contador despues del click sea 4
        expect(counterValue?.textContent).toEqual("Contador: 4")
    })

})