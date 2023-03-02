import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { Request } from 'express';
import { UserloginRequest } from "./request/user-login";
import { Token } from "@school-nx-monorepo/api-interfaces";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Req() req: Request): Token {
        const user = req.user as UserloginRequest;
        return this.authService.login(user);
    }
}