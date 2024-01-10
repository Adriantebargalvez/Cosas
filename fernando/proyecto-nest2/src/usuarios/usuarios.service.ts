import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Model } from 'mongoose';
import { Usuario } from './schemas/usuario.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuario.name) private usuarioSchema:Model<Usuario>){}
  
 async create(createUsuarioDto: CreateUsuarioDto) {
  const nuevoUsuario = new this.usuarioSchema(createUsuarioDto);
  const otroUsuario = await this.usuarioSchema.findOne({username: nuevoUsuario.username}).exec();
    if(otroUsuario == undefined){
      return nuevoUsuario.save();
    }else throw new BadRequestException({'message':'Ya existe un usuario con ese nombre'});
  
    //return 'This action adds a new usuario';
}

  async findAll(): Promise<Usuario[]> {
   return this.usuarioSchema.find().exec();
    //return `Lista de Usuarios`;
  }

  findOne(id: string ): Promise<Usuario> {
    return this.usuarioSchema.findById(id).exec(); 
//return `This action returns a #${id} usuario`;
  }

  findByUsername(username: string): Promise<Usuario>{
   return this.usuarioSchema.findOne({username}).exec();
  }
  async update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
   return this.usuarioSchema.findByIdAndUpdate(id, updateUsuarioDto);
    //return `This action updates a #${id} usuario`;
  }
  

 async remove(id: string): Promise<Usuario | unknown> {
   return this.usuarioSchema.findByIdAndDelete(id).exec();
    //return `This action removes a #${id} usuario`;
  }
}
