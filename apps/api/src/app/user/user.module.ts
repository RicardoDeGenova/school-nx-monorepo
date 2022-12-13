import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from './schemas/user.schema';
import { UserController } from "./user.controller";
import { UserRespository } from "./user.repository";
import { UserService } from "./user.service";
import { RoleIsCorrectValidator } from "./validation/role-is-correct.validator";
import { EmailIsUniqueValidator } from "./validation/email-is-unique.validator";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema,}])
    ],
    controllers: [UserController],
    providers: [
        UserRespository,
        UserService,
        EmailIsUniqueValidator,
        RoleIsCorrectValidator],
    exports: [UserService]
})
export class UserModule {

}