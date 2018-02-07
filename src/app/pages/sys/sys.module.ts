import { NgModule } from '@angular/core';
import { SysRoutingModule, routedComponents, entryComponents } from './sys-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    imports: [SysRoutingModule, SharedModule],
    exports: [],
    declarations: [...routedComponents, ...entryComponents],
    providers: [],
    entryComponents: [...entryComponents]
})
export class SysModule { }
