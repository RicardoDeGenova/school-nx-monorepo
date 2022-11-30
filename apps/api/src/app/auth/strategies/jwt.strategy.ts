import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from '../../user/schemas/user.schema';
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "../../user/user.service";
import { jwtSecret } from "../constants";
import { UserResponse } from "../../user/response";

@Injectable()
export class JwtStrategfy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret
        });
    }

    async validate(validationPayload: { email: string, sub: string }): Promise<UserResponse | null> {
        return this.userService.getUserByEmail(validationPayload.email);
    }
}