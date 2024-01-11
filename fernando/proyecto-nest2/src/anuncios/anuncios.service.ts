import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';
import { CreateAnuncioDto } from './dto/create-anuncio.dto';
import { UpdateAnuncioDto } from './dto/update-anuncio.dto';
import { Anuncio } from './schemas/anuncio.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';



@Injectable()
export class AnunciosService {
  anuncioModel: any;
  findById(anuncioId: any) {
      throw new Error("Method not implemented.");
  }

  constructor(@InjectModel(Anuncio.name) private anuncioSchema:Model<Anuncio>){}
 
 
  async create(createAnuncioDto: CreateAnuncioDto) {
    const nuevoAnuncio = new this.anuncioSchema(createAnuncioDto);
  const otroAnuncio = await this.anuncioSchema.findOne({titulo: nuevoAnuncio.titulo}).exec();
    if(otroAnuncio == undefined){
      return nuevoAnuncio.save();
    }else throw new BadRequestException({'message':'Ya existe un Anuncio con ese titulo'});
  
   // return 'This action adds a new anuncio';
  }

 
  async findAll(): Promise<Anuncio[]>  {
    
    return this.anuncioSchema.find().exec();
  }
 /* async find1(): Promise<{ titulo: string }[]> {
    const anuncios = await this.anuncioSchema.find().exec();
    return anuncios.map((anuncio) => ({ titulo: anuncio.titulo }));
  }*/

  findOne(id: string): Promise<Anuncio> {
    return this.anuncioSchema.findById(id).exec(); 
    //return `This action returns a #${id} anuncio`;
  }

  async update(id: string, updateAnuncioDto: UpdateAnuncioDto): Promise<Anuncio> {
    return this.anuncioSchema.findByIdAndUpdate(id, updateAnuncioDto);
    //return `This action updates a #${id} anuncio`;
  }

  async remove(id: string): Promise<Anuncio | unknown> {
    return this.anuncioSchema.findByIdAndDelete(id).exec();
    //return `This action removes a #${id} anuncio`;
  }

}

