import { NgModule } from '@angular/core';

import { InterkSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [InterkSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [InterkSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class InterkSharedCommonModule {}
