import { AuthService } from '@core/data/auth.service';
import { StateService } from '@core/data/state.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-user',
    template: `
    <nz-dropdown nzPlacement="bottomRight">
        <div class="item d-flex align-items-center px-sm" nz-dropdown>
            <nz-avatar [nzSrc]="stateService.user.user.avatar" nzSize="small" class="mr-sm"></nz-avatar>
            {{stateService.user.user.name}}
        </div>
        <div nz-menu class="width-sm">
            <div nz-menu-item [nzDisable]="true"><i class="anticon anticon-user mr-sm"></i>个人中心</div>
            <div nz-menu-item [nzDisable]="true"><i class="anticon anticon-setting mr-sm"></i>设置</div>
            <li nz-menu-divider></li>
            <div nz-menu-item (click)="logout()"><i class="anticon anticon-setting mr-sm"></i>退出登录</div>
        </div>
    </nz-dropdown>
    `
})
export class HeaderUserComponent implements OnInit {
    constructor(
        public stateService: StateService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void { }

    logout() {
        this.authService.logoutAuth();
        this.router.navigate([this.stateService.config.router.login]);
    }
}
