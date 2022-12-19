import { Role, Teacher } from "@school-nx-monorepo/api-interfaces";
import { registerDecorator, ValidationArguments, 
    ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({ async: true })
export class RoleIsCorrectValidator implements ValidatorConstraintInterface {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async validate(value: Role, validationArguments?: ValidationArguments): Promise<boolean> {
        if (isTeacher(value) || isAdmin(value)) return true;
        
        return false;
    }
}

function isTeacher(object: Role): object is Teacher {
    return (object as Teacher) !== undefined;
}

function isAdmin(object: Role): object is 'admin' {
    return (object === 'admin');
}

export const RoleIsCorrect = (validationOptions: ValidationOptions) => {
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