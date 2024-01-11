import { Module } from '@nestjs/common';
import { AnunciosService } from './anuncios.service';
import { AnunciosController } from './anuncios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Anuncio, anunciosSchema } from './schemas/anuncio.schema';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { LoginGuard } from 'src/auth/guards/login.guard';
import { CreadorGuard } from 'src/auth/guards/creador.guard';










@Module({
  controllers: [AnunciosController],
  providers: [AnunciosService,AuthGuard,AdminGuard,LoginGuard,CreadorGuard],
  imports: [
  
   MongooseModule.forFeature([{name: Anuncio.name , schema:anunciosSchema}]),
 
  ],
  exports:[
    MongooseModule.forFeature([{name: Anuncio.name, schema:anunciosSchema}])
  ]
})
export class AnunciosModule {}
