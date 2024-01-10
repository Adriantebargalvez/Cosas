import { Module, UseGuards } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [UsuariosService],
  imports:[
    UsuariosModule,
  JwtModule.register({
    global:true,
    secret:'secret',
    signOptions: {expiresIn: "2m"}
  })
]
})
export class AuthModule {}
