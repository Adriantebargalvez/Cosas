import { Module, UseGuards } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  controllers: [AuthController],
  providers: [UsuariosService],
  imports:[UsuariosModule]
})
export class AuthModule {}
