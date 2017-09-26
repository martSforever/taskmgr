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
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

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
  ],
  declarations: [ConfirmDialogComponent],
  entryComponents:[
    ConfirmDialogComponent
  ]
})
export class SharedModule {
}
