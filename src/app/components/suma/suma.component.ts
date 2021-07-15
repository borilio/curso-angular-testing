import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: [ './suma.component.css']
})
export class SumaComponent implements OnInit {

  @ViewChild("num1") public inputNum1?: ElementRef<HTMLInputElement>;
  @ViewChild("num2") public inputNum2?: ElementRef<HTMLInputElement>;
  @ViewChild("btnSumar") public btnSumar?: ElementRef<HTMLButtonElement>;
  @ViewChild("resultado") public inputResultado?: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  public sumar(n1:any, n2:any):number {
    let resultado = Number(n1) + Number(n2);
    if (this.inputResultado) { //Si existe el input, accedemos al value
      this.inputResultado.nativeElement.valueAsNumber = resultado;
    }
    return resultado;
  }

  public multiplicar(n1:any, n2:any):number {
    let resultado = Number(n1) * Number(n2);
    if (this.inputResultado) { //Si existe el input, accedemos al value
      this.inputResultado.nativeElement.value = resultado.toString();
    }
    return resultado;
  }


}
