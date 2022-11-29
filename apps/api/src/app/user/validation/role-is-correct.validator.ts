import { registerDecorator, ValidationArguments, 
    ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({ async: true })
export class RoleIsCorrectValidator implements ValidatorConstraintInterface {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async validate(value: string, validationArguments?: ValidationArguments): Promise<boolean> {
        if (value === 'teacher' || value === 'admin') 
        return true;
        
        return false;
    }
}

export const AccessIsCorrect = (validationOptions: ValidationOptions) => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (obj: Object, property: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [],
            validator: RoleIsCorrectValidator,
        });
    };
};