import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

import { UserService } from "../user.service";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailIsUniqueValidator implements ValidatorConstraintInterface{
    constructor(private userService: UserService) {}
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async validate(value: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const userWithEmail = await this.userService.getUserByEmail(value);

        return !userWithEmail;
    }
}

export const EmailIsUnique = (validationOptions: ValidationOptions) => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (obj: Object, property: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [],
            validator: EmailIsUniqueValidator,
        });
    };
};