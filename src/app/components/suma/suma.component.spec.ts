//suma.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaComponent } from './suma.component';

describe('SumaComponent', () => {
  let component: SumaComponent;
  let fixture: ComponentFixture<SumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("en sumar() debería dar 100", ()=>{
    let esperado = 100; //Esto es lo que me tendría que dar
    let real = component.sumar(98,2); //Esto es lo que realmente me da
    expect(real).toEqual(esperado); //Esperamos que el valor real sea igual al esperado
  });

  it("en multiplicar() debería dar 90 y ser un número", ()=>{
    let num1 = 9;
    let num2 = 10;
    let esperado = num1*num2;
    let real = component.multiplicar(num1, num2);
    expect(real).toEqual(esperado);
    expect(real).toBeInstanceOf(Number);
  });

  xit('debería recibir 2 números el método sumar()',() =>{
    let param1=3;
    let param2=8;
    component.sumar(param1, param2);
    expect(param1).toBeInstanceOf(Number);
    expect(param2).toBeInstanceOf(Number);
    //Investigar el método de abajo, para comprobar que un método sea llamado con unos valores concretos
    //expect(spyOn).toHaveBeenCalledWith();
  });

  it('debería de introducir un 6 y 4 y dar un 10 como resultado', ()=>{
    let real;
    if (component.inputNum1 && component.inputNum2 && component.inputResultado && component.btnSumar) {
      component.inputNum1.nativeElement.valueAsNumber = 6;
      component.inputNum2.nativeElement.valueAsNumber = 4;
      component.btnSumar.nativeElement.click();
      real = component.inputResultado.nativeElement.valueAsNumber;
    }
    expect(real).toEqual(10);
  });

 
});
