import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from './schemas/usuario.schema';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { AdminGuard } from 'src/auth/guards/admin.guard';


@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService,AuthGuard,AdminGuard],
  imports: [
    MongooseModule.forFeature([{name: Usuario.name, schema:UsuarioSchema}])
  ],
  exports:[
    MongooseModule.forFeature([{name: Usuario.name, schema:UsuarioSchema}])
  ]
 
})
export class UsuariosModule {}
