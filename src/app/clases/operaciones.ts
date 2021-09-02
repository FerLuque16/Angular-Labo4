export class Operaciones {
    numero1:number;
    numero2:number;
    suma:number;
    promedio:number;

  
    constructor() {
        
        this.numero1=0;
        this.numero2=0;
        this.suma=0;
        this.promedio=0;
        
    }
    calcular(){
        this.suma = this.numero1 + this.numero2;

        this.promedio = (this.numero1 + this.numero2) / 2;
    }

    limpiar(){
        this.numero1=0;
        this.numero2=0;
        this.suma=0;
        this.promedio=0;
    }
    

}
