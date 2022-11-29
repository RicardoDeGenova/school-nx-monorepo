import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { roleName } from "../../app.constants";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext):
        boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string[]>(roleName, context.getHandler());

        const currentUser = context.switchToHttp().getRequest().user;

        if (!roles) return true;

        if (!currentUser)
            throw new UnauthorizedException();

        let hasRole = false;
        roles.forEach(element => {
            element === currentUser.role ? hasRole = true : hasRole = false
        });

        return hasRole !== undefined;
    }
}
