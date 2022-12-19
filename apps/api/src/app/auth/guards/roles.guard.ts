import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role, User } from "@school-nx-monorepo/api-interfaces";
import { Observable } from "rxjs";
import { UserService } from "../../user/user.service";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector, private userService: UserService) { }

    canActivate(context: ExecutionContext):
        boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<Role[]>('roles', context.getHandler());
        const currentUser: User = context.switchToHttp().getRequest().user;

        if (!roles) return true;
        
        if (!currentUser)
            throw new UnauthorizedException();

        const hasRole = roles.forEach(element => {
            element === currentUser.role ? true :  false
        });

        console.log(hasRole);
        return hasRole !== undefined;
    }
}
