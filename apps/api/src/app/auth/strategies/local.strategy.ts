import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from 'passport-local';
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { User } from '../../user/schemas/user.schema';
import { UserResponse } from "../../user/response";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({ usernameField: 'email' })
    }

    async validate(email: string, password: string): Promise<UserResponse> {
        const user = this.authService.validate(email, password);

        if (!user) throw new UnauthorizedException();

        return user;
    }
}