import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Usuario {
    id(id: any, usuario: Usuario) {
        throw new Error("Method not implemented.");
    }
    @Prop()
    username: string;
    @Prop()
    password: string;
    @Prop()
    nombre: string;
    @Prop()
    rol: string;
}
export const UsuarioSchema = SchemaFactory.createForClass(Usuario)