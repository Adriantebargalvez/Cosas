import {Error} from "mongoose";
import ValidationError = module

export class FormValidators{

  static notOnlyWhitespace(control: FormValidators): ValidationError |null{
    if((control.value !=null) && (control.value.trim().length == 0)){
      return  {notOnlyWhitespace: true}
    }else {
      return null;
    }
  }

}
