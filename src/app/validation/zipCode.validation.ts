import { AbstractControl, FormControl } from "@angular/forms";

export function ForbiddenZipCodeValidator(forbiddenZipCode:RegExp)
{
    return(control:AbstractControl)=>{

        const forbidden =forbiddenZipCode.test(control.value);
        return forbidden ? {'forbiddenZipCode':{value:control.value}} :null;
        
    }
}