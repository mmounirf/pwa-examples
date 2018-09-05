import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { environment } from '../../environments/environment.prod';


@Injectable()
export class ApiResolver implements Resolve<any> {
  constructor(private apiService: ApiService) {}

  resolve() {
    return this.apiService.getData(environment.apiUrl, 'progressive web apps');
  }
}
