import { Injectable } from '@angular/core';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const status: number = error.status;
        const message: string = error.message;

        switch(status) {
          case 400:
            console.error(`Error de petición: ${message}`);
            break;
          case 403:
            console.error(`No tienes permiso para este recurso: ${message}`);
            break;
          case 404:
            console.error(`Ruta no encontrada: ${message}`);
            break;
          case 405:
            console.error(`Método HTTP no permitido: ${message}`);
            break;
          case 500:
            console.error(`Error del servidor: ${message}`);
            break;
        }
        return throwError(error);
      })
    );
  }
}
