import { SysAccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysComponent } from './sys.component';
import { SysAccountEditComponent } from './account/edit/edit.component';

export const entryComponents = [SysAccountEditComponent];
export const routedComponents = [SysComponent, SysAccountComponent];

const routes: Routes = [
    {
        path: '',
        component: SysComponent,
        children: [
            { path: '', redirectTo: 'account', pathMatch: 'full' },
            { path: 'account', component: SysAccountComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SysRoutingModule { }
