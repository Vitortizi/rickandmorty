import { Injectable } from '@angular/core';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  public handleError<T>(operation = 'operation') {
    // Retorna erros especificos da requisição, caso a URL esteja errada, site fora do ar, etc. Devera retornar um erro.
    return (error: any) => {
      return of({ 'result': false, 'Error': `${operation} failed: ${error.message}`, status: error.status });
    };
  }
}