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
  declarations: []
})
export class SharedModule {
}
