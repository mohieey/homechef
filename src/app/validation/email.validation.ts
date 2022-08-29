import { AbstractControl, FormControl } from "@angular/forms";

export function ForbiddenEmailValidator(forbiddenEmail:RegExp)
{
    return(control:AbstractControl)=>{

        const forbidden =forbiddenEmail.test(control.value);
        return forbidden ? {'forbiddenEmail':{value:control.value}} :null;
        
    }
}