import { AbstractControl, ValidatorFn } from "@angular/forms";

/* export function checkForName(control: AbstractControl) : null | {[key:string]: boolean} {

  if(control.value.match(/[0-9]/g)) {
    return {namenotValid: true}
  }else {
    return null;
  }

} */

export function ValidationFunction (regex: RegExp) : ValidatorFn {
  return (control: AbstractControl): null | {[key:string] : boolean} => {
    if(control.value.match(regex)) {
    return {namenotValid: true}
      }else {
        return null;
      }
  }
}











//function to call on the hole form
export function passwordNotMatch(form: AbstractControl) : null | {[key:string]: boolean} {
      const pass = form.get('password')?.value;
      const repass = form.get('repassword')?.value;

      if( repass !== pass) {
        return {passNotMatch: true}
      } else {
        return null;
      }
}
