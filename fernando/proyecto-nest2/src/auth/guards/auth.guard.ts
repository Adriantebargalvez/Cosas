import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService, TokenExpiredError } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()

export class AuthGuard implements CanActivate {

constructor( private jwtService:JwtService) { }
   async canActivate(context: ExecutionContext): Promise<boolean> {
        const request:Request = context.switchToHttp().getRequest();

                var miToken=this.extractTokenFromHeader(request);

                if (!miToken) {                   
                miToken = request.cookies.access_token;                   
                    }                    
                    if (!miToken) throw new UnauthorizedException(); 

                try {
                
                    const payload = await this.jwtService.verifyAsync(miToken,{secret:'secret'});
                    request["user"]=payload;
                    return payload;
                
                    } catch(e) { 
                        if (e instanceof TokenExpiredError) {

                            // access_token caducado
                            
                            // obtener y validar refresh_token (desde cookies)
                            
                            miToken = request.cookies.refresh_token;
                            
                            if (!miToken) throw new UnauthorizedException();
                     }
                
                    }
                }
private extractTokenFromHeader(req: Request): string | undefined {
        
    const [ tipo, token ] = req.headers.authorization?.split(" ") ?? [];
    
    return ( tipo === "Bearer" ? token : undefined );
    
    }
}
