import {FormControl, ValidationErrors} from "@angular/forms";

export class FormValidators {
  static notOnlyWhitespace(control: FormControl): ValidationErrors | null {
    if (control.value != null && control.value.trim().length === 0) {
      return { notOnlyWhitespace: true };
    } else {
      return null;
    }
  }

  static notAllowedWord(control: FormControl): ValidationErrors | null {
    const forbiddenWord = 'sex';
    if (control.value != null && control.value.toLowerCase().includes(forbiddenWord)) {
      return { notAllowedWord: true };
    } else {
      return null;
    }
  }
  static maxCurrentYear(control: FormControl): ValidationErrors | null {
    const currentYear = new Date().getFullYear();
    if (control.value != null && control.value > currentYear) {
      return { maxCurrentYear: true };
    } else {
      return null;
    }
  }
}
