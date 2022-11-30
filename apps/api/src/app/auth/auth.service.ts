import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from './constants';
import { User } from '../user/schemas/user.schema';
import { UserResponse } from '../user/response';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService) { }

    async validate(email: string, password: string): Promise<UserResponse | null> {
        const user = await this.userService.validateWithEmail(email, password);
        
        if (!user) return null;

        return user;
    }

    login(user: User): { access_token: string } {
        const payload = {
            email: user.email,
            sub: user.id,
        };
        
        return { access_token: this.jwtService.sign(payload), }
    }

    async verify(token: string): Promise<UserResponse> {
        const decoded = this.jwtService.verify(token, { secret: jwtSecret });

        const user = await this.userService.getUserByEmail(decoded.email);

        if (!user) {
            throw new Error('Unable to get user from token.');
        }

        return user;
    }
}
