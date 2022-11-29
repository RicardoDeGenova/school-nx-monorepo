import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@school-nx-monorepo/shared/database';
import { validatePassword } from '../utils/bcrypt';
import { jwtSecret } from './constants';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService) { }

    async validate(email: string, password: string): Promise<User | null> {
        const user = await this.userService.getUserByEmail(email);
        
        if (!user) return null;

        const passwordIsValid = validatePassword(password, user.password);
        return passwordIsValid ? user : null;
    }

    login(user: User): { access_token: string } {
        const payload = {
            email: user.email,
            sub: user.id,
        };
        
        return { access_token: this.jwtService.sign(payload), }
    }

    async verify(token: string): Promise<User> {
        const decoded = this.jwtService.verify(token, { secret: jwtSecret });

        const user = await this.userService.getUserByEmail(decoded.email);

        if (!user) {
            throw new Error('Unable to get user from token.');
        }

        return user;
    }
}
