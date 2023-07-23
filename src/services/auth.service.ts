import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from 'src/models/newUser.interface';
import { Observable } from 'rxjs';
import { environments as env } from '../environments/environment.development'

@Injectable({providedIn: 'root'})
export class AuthService {

  private readonly baseUrl: string = env.baseUrl

  constructor(private http: HttpClient) { }

    register( newUser: NewUser ): Observable<NewUser>{
      return this.http.post<NewUser>(`${this.baseUrl}/auth/registro`, newUser);
    }

    login( usuario: { email: string, password: string }): Observable<any>{
      return this.http.post<any>(`${this.baseUrl}/auth/login`, usuario);
    }

}
