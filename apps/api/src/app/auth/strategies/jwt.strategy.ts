import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "@school-nx-monorepo/shared/database";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "../../user/user.service";
import { jwtSecret } from "../constants";

@Injectable()
export class JwtStrategfy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret
        });
    }

    async validate(validationPayload: { email: string, sub: string }): Promise<User | null> {
        return this.userService.getUserByEmail(validationPayload.email);
    }
}