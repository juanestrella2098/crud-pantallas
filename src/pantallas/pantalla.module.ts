/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Pantalla, PantallaSchema } from "./models/pantalla.schema";
import { PantallaService } from "./services/pantalla.service";
import { PantallaController } from "./controllers/pantalla.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Pantalla.name, schema: PantallaSchema}])
    ],
    providers: [PantallaService],
    controllers: [PantallaController]
})

export class PantallaModule {}