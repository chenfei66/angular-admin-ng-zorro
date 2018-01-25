import { Injectable, Injector } from '@angular/core';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';

@Injectable()
export class NoticeService {
  constructor(
    private injector: Injector
  ) { }

  private timeout = 5000;
  private toastsLimit = 5;
  private isNewestOnTop = true;
  private isHideOnClick = true;
  private isDuplicatesPrevented = false;
  private isCloseButton = true;

  private types: string[] = ['default', 'info', 'success', 'warning', 'error', 'loading'];

  private animations: string[] = [
    'fade',
    'flyLeft',
    'flyRight',
    'slideDown',
    'slideUp'
  ];

  private positions: string[] = [
    'toast-top-full-width',
    'toast-bottom-full-width',
    'toast-top-left',
    'toast-top-center',
    'toast-top-right',
    'toast-bottom-right',
    'toast-bottom-center',
    'toast-bottom-left',
    'toast-center'
  ];


  get nzMessageService() {
    return this.injector.get(NzMessageService);
  }

  get nzNotificationService() {
    return this.injector.get(NzNotificationService);
  }

  private showNotice(type: string, title: string, body: string) {
    return this.nzNotificationService.create(type, title, body);
  }

  private showMsg(type: string, title: string, body: string) {
    return this.nzNotificationService.create(type, title, body);
  }

  clear() {
    this.nzNotificationService.remove();
    this.nzMessageService.remove();
  }

  notice_info(msg, title = '信息') {
    return this.showNotice(this.types[1], title, msg);
  }

  notice_success(msg, title = '成功') {
    return this.showNotice(this.types[2], title, msg);
  }

  notice_warning(msg, title = '警告') {
    return this.showNotice(this.types[3], title, msg);
  }

  notice_error(msg, title = '错误') {
    return this.showNotice(this.types[4], title, msg);
  }

  notice_html(html) {
    return this.nzNotificationService.html(html);
  }

  notice_clear() {
    return this.nzNotificationService.remove();
  }

  msg_info(msg, title = '信息') {
    return this.showMsg(this.types[1], title, msg);
  }

  msg_success(msg, title = '成功') {
    return this.showMsg(this.types[2], title, msg);
  }

  msg_warning(msg, title = '警告') {
    return this.showMsg(this.types[3], title, msg);
  }

  msg_error(msg, title = '错误') {
    return this.showMsg(this.types[4], title, msg);
  }

  msg_loading(msg, title = '') {
    return this.nzMessageService.loading(msg);
  }

  msg_html(html) {
    return this.nzMessageService.html(html);
  }

  msg_clear() {
    return this.nzMessageService.remove();
  }

}
