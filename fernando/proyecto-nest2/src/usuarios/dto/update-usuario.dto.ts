import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    currentPassword(currentPassword: any, password: string) {
        throw new Error("Method not implemented.");
    }
}
