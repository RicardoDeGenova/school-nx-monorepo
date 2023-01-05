import { HttpException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from './constants';
import { UserResponse } from '../user/response';
import { UserloginRequest } from './request/user-login';
import { isEmail } from 'class-validator';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService) { }

    async validate(email: string, password: string): Promise<UserResponse | null> {
        const user: UserResponse = await this.userService.validateWithEmail(email, password);
        if (!user){
            throw new HttpException('User not found.', 401);
        }
        return user;
    }

    login(user: UserloginRequest): { access_token: string } {
        const payload = {
            email: user.email,
            sub: user._id,
        };

        if (!isEmail(user.email))
            throw new HttpException('Email must be valid.', 401);

        return { access_token: this.jwtService.sign(payload), }
    }

    async verify(token: string): Promise<UserResponse> {
        const decoded = this.jwtService.verify(token, { secret: jwtSecret });

        const user: UserResponse = await this.userService.findByEmail(decoded.email);

        if (!user) {
            throw new Error('Unable to get user from token.');
        }

        return user;
    }
}
