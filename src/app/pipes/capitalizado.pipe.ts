import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean = true): string {

    value = value.toLowerCase();

    console.log(value);
    

    let nombres = value.split(' ');

    console.log(nombres);
    

    if(todas){

      nombres = nombres.map(nombre =>{

        console.log(nombre);

        return nombre[0].toUpperCase() + nombre.substring(1);


      })

      return nombres.join(' ');

    } else {

      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
    }

    return nombres.join(' ');
  }

}
