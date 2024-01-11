import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Anuncio {
   
    @Prop()
    titulo: string;
    @Prop()
    descripcion: string;
    @Prop()
    usuario: string;
    creatorId: any;

}
export const anunciosSchema = SchemaFactory.createForClass(Anuncio)

