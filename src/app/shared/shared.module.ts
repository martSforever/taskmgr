import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
/*扁平化组件依赖*/
import {
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule, MdInputModule,
  MdListModule,
  MdSlideToggleModule,
  MdGridListModule, MdDialogModule, MdAutocompleteModule, MdOptionModule, MdMenuModule, MdCheckboxModule, MdTooltip,
  MdTooltipModule, MdRadioModule, MdNativeDateModule, MdDatepickerModule, MdDatepickerToggle, MdSelectModule,
  MdSidenavModule,
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {DirectiveModule} from "../directive/directive.module";

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdOptionModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdSelectModule,
    MdSidenavModule,
    DirectiveModule,
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdSlideToggleModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdOptionModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdSelectModule,
    MdSidenavModule,
    DirectiveModule,
  ],
  declarations: [ConfirmDialogComponent],
  entryComponents:[
    ConfirmDialogComponent
  ]
})
export class SharedModule {
}
