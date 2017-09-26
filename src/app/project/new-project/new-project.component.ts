import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  title = '';

  constructor(@Inject(MD_DIALOG_DATA) private data, private dislogRef: MdDialogRef<NewProjectComponent>) {
  }

  ngOnInit() {
    // console.log(this.data);
    this.title = this.data.title;
  }

  onSave() {
    this.dislogRef.close('I received your message...');
  }

}
