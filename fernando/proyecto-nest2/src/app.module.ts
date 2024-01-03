import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
    imports: [UsuariosModule,MongooseModule.forRoot('mongodb+srv://root:root@proyecto.d40hgzy.mongodb.net/'), AuthModule],
 
})
export class AppModule {}
