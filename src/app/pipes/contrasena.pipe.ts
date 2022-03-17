import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value:string, estado:boolean = true): string {
    return (estado) ? '*'.repeat(value.length) : value;
  }

}
