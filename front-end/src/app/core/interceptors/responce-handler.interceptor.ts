import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerInterceptorService implements HttpInterceptor {
  authService: any;

  constructor(public toastr:ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    return next.handle(req).pipe(tap((success)=>{
      if (success instanceof HttpResponse) {
        if (success.url.endsWith('signin')) {
          this.toastr.success('Login Success')
        }else if(success.url.endsWith('signup')){
          this.toastr.success('Register Success')
        }else if(success.url.includes('order/create')){
          this.toastr.success('Purchase create success')
        }else if(success.url.includes('create')){
          this.toastr.success('Create Success')
        }else if(success.url.includes('delete')){
          this.toastr.success('Delete item success')
        }else if(success.url.includes('edit')){
          this.toastr.success('Edit Success')
        }
      }
      
    }),catchError((err)=>{
      this.toastr.error(err.error.message, 'Error')
      throw err
    }));
  }
}
