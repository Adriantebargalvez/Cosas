import * as bcrypt from "bcryptjs"
import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUsuarioDto } from "src/usuarios/dto/create-usuario.dto";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { UpdateUsuarioDto } from "src/usuarios/dto/update-usuario.dto";
import { Usuario } from "src/usuarios/schemas/usuario.schema";

@Controller('auth')
export class AuthController {
    constructor(private usuarioService:UsuariosService){

    }
    @Post("/SingUp")
   async register(@Body() createUsuarioDto:CreateUsuarioDto){
        createUsuarioDto.password = await bcrypt.hash(createUsuarioDto.password,10);
        return this.usuarioService.create(createUsuarioDto);
    }
@HttpCode(HttpStatus.OK)
    @Post("/LogIn")
   async login(@Body() loginUsuarioDto:UpdateUsuarioDto){

       const usuario = await this.usuarioService.findByUsername(loginUsuarioDto.username);
       if(!usuario) throw new HttpException('El usuario no existe',HttpStatus.NOT_FOUND);
        const passwordOK = await bcrypt.compare(loginUsuarioDto.password,usuario.password);
        if(!passwordOK) throw new HttpException("La contraseña no es correcta",HttpStatus.UNAUTHORIZED);
        return{"token":"1234567890"};
    }

}
