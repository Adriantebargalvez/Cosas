import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()

export class AdminGuard implements CanActivate {

constructor( private jwtService:JwtService) { }
   async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();

                const miToken=this.extractTokenFromHeader(req);
                
                try {
                
                    const payload = await this.jwtService.verifyAsync(miToken);
                    if(payload.rol != "admin") throw new UnauthorizedException();
                    req["user"]=payload;
                    return payload;
                
                    } catch { 
                        throw new UnauthorizedException();
                     }
                
                }
private extractTokenFromHeader(req: Request): string | undefined {
        
    const [ tipo, token ] = req.headers.authorization?.split(" ") ?? [];
    
    return ( tipo === "Bearer" ? token : undefined );
    
    }
}