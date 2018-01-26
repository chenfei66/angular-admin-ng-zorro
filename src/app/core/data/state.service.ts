import { UserService } from './users.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { AppConfig } from '../public/config';

@Injectable()
export class StateService {
  public config = new AppConfig();

  constructor(public user: UserService) { }
}
