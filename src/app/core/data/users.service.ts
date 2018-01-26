import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as helper from '../../helpers';

@Injectable()
export class UserService {
  private __userInfo: any = {};
  private __api_dt: any = null;

  constructor() { }

  getUser(): Observable<any> {
    return Observable.of(this.__userInfo);
  }

  set userInfo(dd: any) {
    this.__userInfo = dd;
    if (dd) {
      const pic = helper.parseJSON(dd.images) || [];
      if (pic && pic.length > 0) {
        this.__userInfo.avatar = pic[0].path;
      }
    }
  }

  get userInfo() {
    return this.__userInfo;
  }

  set apiDt(dd: any) {
    this.__api_dt = dd;
  }

  get apiDt() {
    return this.__api_dt;
  }
}
