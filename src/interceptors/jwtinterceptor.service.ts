import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { navConfig } from '../app/config/navigation';
import { LoaderService } from '../app/loader/loader.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        public loaderService: LoaderService,
        private router: Router,
        private authService: AuthenticationService,
    ) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // const token = localStorage.getItem('token');
        // console.log(token,'iiiiiiiiiiiiiiiiiiii')
        const token = '88126ff06c4778f6f10911a0764f6940d34dbf2cb33df795de5c719fd4ba9d339304ee375fbcf6da08daa3cdc01e3ea204b8471d9b325d1c7c5de07d2ba13c21a8cb4e9463e95f6088ad832812d2ea15206ccf6e62bdaf9da84f8f4626b057de50f13ca3831180126ad400b7f263e8a9548f67d7bdd56aae7855368892ee8e2b'
        let headers = request.headers;
        headers = headers.append('Content-Type', 'application/json');
        if (token && !request.url.includes('login')) {
            headers = headers.append('Authorization', `Bearer ${token}`);
            request = request.clone({
                headers
            });
        }
        this.loaderService.showLoader();
        return next.handle(request)
            .pipe(catchError((err) => {
                this.loaderService.hideLoader();
                if (err.status === 401) {
                    this.authService.clearStorageAndNavigateToLogin();
                    return of(err.message);
                } else if (err.status === 403) {
                    this.router.navigate(['/forbidden']);
                    return of(err.message);
                }
                return throwError(err);
            }))
            .pipe(map<HttpEvent<any>, any>((res: HttpEvent<any>) => {
                if (res instanceof HttpResponse) {
                    this.loaderService.hideLoader();
                }
                return res;
            }));
    }
}
