import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Usuario } from "src/usuarios/schemas/usuario.schema";

@Injectable()

export class CreadorGuard implements CanActivate {

constructor( private jwtService:JwtService) { }
   async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();

                const miToken=this.extractTokenFromHeader(req);
                
                try {
                
                    const payload = await this.jwtService.verifyAsync(miToken);
                    if(payload.rol != "admin" || payload.id === payload.creatorId  ) throw new UnauthorizedException();
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