import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Admin, User } from "@school-nx-monorepo/api-interfaces";
import { Observable } from "rxjs";
import { UserService } from "../../user/user.service";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector, private userService: UserService) { }

    canActivate(context: ExecutionContext):
        boolean | Promise<boolean> | Observable<boolean> {
        const currentUser: User = context.switchToHttp().getRequest().user;
    
        if (!currentUser) throw new UnauthorizedException();

        const hasRole = currentUser.isAdmin;        
        return hasRole === true;
    }
}
