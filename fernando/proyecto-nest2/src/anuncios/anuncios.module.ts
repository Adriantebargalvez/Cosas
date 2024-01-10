import { Module } from '@nestjs/common';
import { AnunciosService } from './anuncios.service';
import { AnunciosController } from './anuncios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Anuncio, anunciosSchema } from './schemas/anuncio.schema';

@Module({
  controllers: [AnunciosController],
  providers: [AnunciosService],
  imports: [
   MongooseModule.forFeature([{name: Anuncio.name , schema:anunciosSchema}])
  ],
  exports:[
    MongooseModule.forFeature([{name: Anuncio.name, schema:anunciosSchema}])
  ]
})
export class AnunciosModule {}
