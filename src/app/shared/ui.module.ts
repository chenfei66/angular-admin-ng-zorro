import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { throwIfAlreadyLoaded } from '@core/module-import-guard';

// region: zorro modules

import {
    // LoggerModule,
    // NzLocaleModule,
    // NzCalendarModule,
    // NzCardModule,
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    NzButtonModule,
    NzAlertModule,
    NzBadgeModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzGridModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSpinModule,
    NzSliderModule,
    NzSwitchModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzUtilModule,
    NzStepsModule,
    NzDropDownModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzRootModule,
    NzCarouselModule,
    NzCollapseModule,
    NzTimelineModule,
    NzToolTipModule,
    NzAvatarModule,
    NzUploadModule,
    // SERVICES
    NzNotificationService,
    NzMessageService
} from 'ng-zorro-antd';

export const ZORROMODULES = [
    // LoggerModule,
    // NzLocaleModule,
    // NzCalendarModule,
    // NzCardModule,
    // NzBackTopModule,
    // NzAffixModule,
    // NzAnchorModule,
    NzButtonModule,
    NzAlertModule,
    NzBadgeModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzGridModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSpinModule,
    NzSliderModule,
    NzSwitchModule,
    NzProgressModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzUtilModule,
    NzStepsModule,
    NzDropDownModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzRootModule,
    NzCarouselModule,
    NzCollapseModule,
    NzTimelineModule,
    NzToolTipModule,
    NzAvatarModule,
    NzUploadModule,
];

// endregion

// region: @delon/abc modules
import {
    AdSimpleTableModule,
    AdReuseTabModule,
    AdAvatarListModule,
    AdChartsModule,
    AdCountDownModule,
    AdDescListModule,
    AdEllipsisModule,
    AdErrorCollectModule,
    AdExceptionModule,
    AdFooterToolbarModule,
    AdGlobalFooterModule,
    AdNoticeIconModule,
    AdNumberInfoModule,
    AdProHeaderModule,
    AdResultModule,
    AdSidebarNavModule,
    AdStandardFormRowModule,
    AdTagSelectModule,
    AdTrendModule,
    AdDownFileModule,
    AdImageModule,
    AdUtilsModule,
    AdFullContentModule,
    AdXlsxModule,
    AdZipModule
} from '@delon/abc';

export const ABCMODULES = [
    AdSimpleTableModule,
    AdReuseTabModule,
    AdAvatarListModule,
    AdChartsModule,
    AdCountDownModule,
    AdDescListModule,
    AdEllipsisModule,
    AdErrorCollectModule,
    AdExceptionModule,
    AdFooterToolbarModule,
    AdGlobalFooterModule,
    AdNoticeIconModule,
    AdNumberInfoModule,
    AdProHeaderModule,
    AdResultModule,
    AdSidebarNavModule,
    AdStandardFormRowModule,
    AdTagSelectModule,
    AdTrendModule,
    AdDownFileModule,
    AdImageModule,
    AdUtilsModule,
    AdFullContentModule,
    AdXlsxModule,
    AdZipModule
];
// endregion

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AlainThemeModule } from '@delon/theme';
export const AlainThemeModuleS = AlainThemeModule;

import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
export const NgZorroAntdExtraModuleS = NgZorroAntdExtraModule;

import { DelonCacheModule } from '@delon/cache';

// region: global config functions

// import { SimpleTableConfig } from '@delon/abc';
// export function simpleTableConfig(): SimpleTableConfig {
//     return { ps: 20 };
// }

// endregion

const providers = [];

@NgModule({
    imports: [
        NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' }),
        // theme
        AlainThemeModule.forRoot(),
        // abc
        AdErrorCollectModule.forRoot(), AdFooterToolbarModule.forRoot(), AdSidebarNavModule.forRoot(), AdDownFileModule.forRoot(), AdImageModule.forRoot(),
        AdAvatarListModule.forRoot(), AdDescListModule.forRoot(), AdEllipsisModule.forRoot(), AdExceptionModule.forRoot(), AdExceptionModule.forRoot(),
        AdNoticeIconModule.forRoot(), AdNumberInfoModule.forRoot(), AdProHeaderModule.forRoot(), AdResultModule.forRoot(), AdStandardFormRowModule.forRoot(),
        AdTagSelectModule.forRoot(), AdTrendModule.forRoot(), AdUtilsModule.forRoot(), AdChartsModule.forRoot(), AdCountDownModule.forRoot(), AdSimpleTableModule.forRoot(),
        AdReuseTabModule.forRoot(), AdFullContentModule.forRoot(), AdXlsxModule.forRoot(), AdZipModule.forRoot(),
        // cache
        DelonCacheModule.forRoot(),
    ]
})
export class UIModule {
    constructor( @Optional() @SkipSelf() parentModule: UIModule) {
        throwIfAlreadyLoaded(parentModule, 'UIModule');
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UIModule,
            providers: [...providers]
        };
    }
}
