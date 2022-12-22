import {
    registerDecorator, ValidationArguments, ValidationOptions,
    ValidatorConstraint, ValidatorConstraintInterface
} from "class-validator";

@ValidatorConstraint({ async: true })
export class RoleIsCorrectValidator implements ValidatorConstraintInterface {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async validate(isAdmin: boolean, validationArguments?: ValidationArguments): Promise<boolean> {
        return isAdmin;
    }
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