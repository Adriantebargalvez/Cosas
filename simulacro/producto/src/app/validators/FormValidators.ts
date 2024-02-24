import {FormControl, ValidationErrors} from "@angular/forms";

export class FormValidators{
  static notOnlyWhitespace(control: FormControl): ValidationErrors | null{
    if((control.value !=null) && (control.value.trim().length == 0)){
      return {notOnlyWhitespace: true}
    }else {
      return null;
    }
  }
    static notImgFile(control: FormControl): ValidationErrors | null{
    const elementos: string[] = control.value.split('.');
    const fin = elementos[elementos.length-1];
    if ((fin === 'jpg'|| fin === 'png' ||fin === 'jpeg')) {
      return null;
    }else{
      return {notImgFile:true}
    }
    }
  }

