import {NgModule, SkipSelf, Optional} from '@angular/core';
/*http依赖必须在material依赖之前*/
import {HttpModule} from '@angular/http';
/*加载svg图所需要的依赖*/
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
/*加载共享模块*/
import {SharedModule} from "../shared/shared.module";
/*头部尾部组件*/
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
/*侧边栏组件*/
import {SidebarComponent} from './sidebar/sidebar.component';
/*加载svg组件*/
import {loadSvgResource} from "../utils/svg.utils";

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule, ir: MdIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！');
    }
    loadSvgResource(ir, ds);
  }
}
