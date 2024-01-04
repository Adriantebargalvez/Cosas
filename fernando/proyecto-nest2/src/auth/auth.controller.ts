import * as bcrypt from "bcryptjs"
import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, Get, Req, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from "src/usuarios/dto/create-usuario.dto";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { UpdateUsuarioDto } from "src/usuarios/dto/update-usuario.dto";
import { Usuario } from "src/usuarios/schemas/usuario.schema";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Controller('auth')
export class AuthController {
    constructor(private usuarioService:UsuariosService,private jwtService:JwtService){

    }
    @Post("/SingUp")
   async register(@Body() createUsuarioDto:CreateUsuarioDto){
        createUsuarioDto.password = await bcrypt.hash(createUsuarioDto.password,10);
        return this.usuarioService.create(createUsuarioDto);
    }
@HttpCode(HttpStatus.OK)
    @Post("/LogIn")
   async login(@Body() loginUsuarioDto:UpdateUsuarioDto){

    const nombreOK = await this.usuarioService.findByUsername(loginUsuarioDto.nombre);
    if(!nombreOK) throw new HttpException('El Nombre no existe',HttpStatus.NOT_FOUND);
       const usuario = await this.usuarioService.findByUsername(loginUsuarioDto.username);
       if(!usuario) throw new HttpException('El usuario no existe',HttpStatus.NOT_FOUND);
        const passwordOK = await bcrypt.compare(loginUsuarioDto.password,usuario.password);
        if(!passwordOK) throw new HttpException("La contraseña no es correcta",HttpStatus.UNAUTHORIZED);
        const payload = {username: usuario.username,rol: usuario.rol};
       return{acess_toke: await this.jwtService.signAsync(payload)}
          //return{"token":"1234567890"};
        
    }
  

@Get("/validar")
async validarToken(@Req() req:Request ) {

const miToken=this.extractTokenFromHeader(req);

try {

    const payload = await this.jwtService.verifyAsync(miToken);
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


