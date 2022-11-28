import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "@school-nx-monorepo/shared/database";
import { UserController } from "./user.controller";
import { UserRespository } from "./user.repository";
import { UserService } from "./user.service";
import { AccessIsCorrectValidator } from "./validation/access-is-correct.validator";
import { EmailIsUniqueValidator } from "./validation/email-is-unique.validator";

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
],
    controllers: [UserController],
    providers: [
        UserRespository, 
        UserService, 
        EmailIsUniqueValidator, 
        AccessIsCorrectValidator]
})
export class UserModule{

}