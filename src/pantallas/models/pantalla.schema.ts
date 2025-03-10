/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pantalla extends Document {
    @Prop({ required: true })
    marca: string;
    @Prop({ required: true })
    modelo: string;
    @Prop({ required: true })
    tamanio: number;
    @Prop({ required: true })
    tipo: string;
    @Prop({ required: true })
    alt_image: string;
}

export const PantallaSchema = SchemaFactory.createForClass(Pantalla);