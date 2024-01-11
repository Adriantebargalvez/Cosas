

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();

        const token = this.extractTokenFromHeader(req);
       
        try {
            const payload = await this.jwtService.verifyAsync(token);
            req["user"] = payload; // Agrega el payload al objeto de solicitud para usarlo posteriormente si es necesario
            return true;
        } catch {
            throw new UnauthorizedException("Usuario no autenticado.");
            
            
        }
    }

    private extractTokenFromHeader(req: Request): string | undefined {
        const [tipo, token] = req.headers.authorization?.split(" ") ?? [];
        return tipo === "Bearer" ? token : undefined;
    }
}
