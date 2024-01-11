import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Head } from '@nestjs/common';
import { AnunciosService } from './anuncios.service';
import { CreateAnuncioDto } from './dto/create-anuncio.dto';
import { UpdateAnuncioDto } from './dto/update-anuncio.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { LoginGuard } from 'src/auth/guards/login.guard';
import { CreadorGuard } from 'src/auth/guards/creador.guard';






@Controller('anuncios')
export class AnunciosController {
  anuncioSchema: any;
  constructor(private readonly anunciosService: AnunciosService) {}
  @UseGuards(LoginGuard)
  @Post()
  create(@Body() createAnuncioDto: CreateAnuncioDto) {
   
    return this.anunciosService.create(createAnuncioDto);
  }
  
  /*@Get()
  find1() {
    return this.anunciosService.find1();
  }*/
  @UseGuards()
  @Get()
  findAll() {
    return this.anunciosService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anunciosService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnuncioDto: UpdateAnuncioDto) {
    return this.anunciosService.update(id, updateAnuncioDto);
  }
  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anunciosService.remove(id);
  }
}
