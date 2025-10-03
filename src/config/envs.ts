// import { ConfigModule } from '@nestjs/config';
import 'dotenv/config'
import * as joi from "joi";

//TODO revisar si no tenemos que importar un config

interface EnvVars{
    PORT: number;
    DATABASE_URL: string;
}


const envsSchema = joi.object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
})
.unknown(true);

const { error, value } = envsSchema.validate( process.env )

if( error ){
    throw new Error(`Config validation error: ${ error.message }`);
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    databaseUrl: envVars.DATABASE_URL
}