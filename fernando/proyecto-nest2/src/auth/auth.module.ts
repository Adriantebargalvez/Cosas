import { Module, UseGuards } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';



@Module({
  controllers: [AuthController],
  providers: [UsuariosService,AuthGuard,AdminGuard],
  imports:[
    UsuariosModule,
  JwtModule.register({
    global:true,
    secret:'secret',
    signOptions: {expiresIn: "2m"}
  })
],
exports:[AuthGuard,AdminGuard]
})
export class AuthModule {}
