import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
  let component: ButtonAddComponent;
  let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Debe emitir el valor de 2",()=>{
    let nuevoContador =0;
    //Subscribe saca el valor 
    component.onAdd.subscribe(contador=>{
      nuevoContador = contador
    })
    //Ejecutar el metodo dos veces a ver si cambia el valor a 2
    component.add();
    //Cada vez que se llama se usa en vez de 1 ahora vale 2 el contador
    component.add();

    expect(nuevoContador).toBe(2)

  })
});
