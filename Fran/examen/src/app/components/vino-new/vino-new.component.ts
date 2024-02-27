import { Component } from '@angular/core';
import {FormValidators} from "../../validators/FormValidators";

@Component({
  selector: 'app-vino-new',
  templateUrl: './vino-new.component.html',
  styleUrls: ['./vino-new.component.css']
})
export class VinoNewComponent {

  protected readonly FormValidators = FormValidators;
}
