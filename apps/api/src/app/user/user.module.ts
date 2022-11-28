import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "@school-nx-monorepo/shared/interfaces";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { AccessIsCorrectValidator } from "./validation/access-is-correct.validator";
import { EmailIsUniqueValidator } from "./validation/email-is-unique.validator";

@Module({
    imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])
],
    controllers: [UserController],
    providers: [UserService, EmailIsUniqueValidator, AccessIsCorrectValidator]
})
export class UserModule{

}