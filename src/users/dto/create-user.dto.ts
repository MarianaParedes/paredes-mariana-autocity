import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

//TODO revisar como validar que dni acepte solo numeros pero que al guardar se guarde como un string
export class CreateUserDto {

    //Que informaci[on estoy esperando a la hora en que creen un usuario

    @IsString()
    public name: string;

    @IsString()
    public lastname: string;

    @IsNumber({
        maxDecimalPlaces: 8,
    })
    @Type(()=> Number )
    public dni: number;

    @IsString()
    public email: string;

}
