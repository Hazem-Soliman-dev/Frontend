import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidor{

static passwordStrength():ValidatorFn{
    return (control:AbstractControl) : ValidationErrors | null=>{
      const value = control.value;
      if(!value){
        return null;
      }
      const hasNumber = /[0-9]/.test(value);
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const isValidLength = value.length >= 8;
      const passwordValid = hasNumber && hasLower && hasUpper && isValidLength;
      
      return passwordValid ? null : {passwordstrength:true};
   
    }
}

static matchPassword():ValidatorFn{
  return (control:AbstractControl):ValidationErrors | null=>{
    const retypePassword = control.value;
    const password = control.parent?.get('password')?.value;
    if(!retypePassword){
      return null;
    }
  
    if(password === retypePassword){
      return null
    }
    else
    {
     return {passworddismatch:true}
    }

  }
}

static matchPasswordFrom (form:AbstractControl): ValidationErrors | null{
  const password = form.get('password')!.value;
  const retypepassword = form.get('retypepassword')!.value;
  if(password === '' || retypepassword === '')
  {
    return null;
  }
  if(password === retypepassword){
    return null
  }
  else
  {
   return {passworddismatch:true}
  }
}
  

}