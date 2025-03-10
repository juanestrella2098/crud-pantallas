/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Pantalla } from "src/pantallas/models/pantalla.schema";

@Injectable()
export class PantallaService {
    constructor(@InjectModel(Pantalla.name) private pantallaModel: Model<Pantalla>) { }

    async create(createPantallaDto: any): Promise<Pantalla> {
        const createdPantalla = new this.pantallaModel(createPantallaDto);
        return createdPantalla.save();
    }

    async find(query?: any): Promise<Pantalla[]> {
        if (!query || Object.keys(query).length === 0) {
            return this.pantallaModel.find().exec();
        } else {
            return this.pantallaModel.find(query).exec();
        }
    }

    async findOne(id: string): Promise<Pantalla> {
        const pantalla = await this.pantallaModel.findById(id).exec();
        if (!pantalla) {
            throw new NotFoundException(`Pantalla con id: ${id} no ha sido encontrado`)
        }

        return pantalla;
    }

    //async findByTipo(tipo: string): Promise<Pantalla[]> {
    //    const pantallasBuscadas = await this.pantallaModel.find({ tipo }).exec();
    //
    //    if (pantallasBuscadas.length === 0) {
    //        throw new NotFoundException('No se encontraron pantallas con el tipo especificado');
    //    }
    //
    //    return pantallasBuscadas;
    //}


    async update(id: string, updatePantallaDto: any): Promise<Pantalla> {
        const pantallaActualizada = await this.pantallaModel.findByIdAndUpdate(id, updatePantallaDto, { new: true }).exec();
        if (!pantallaActualizada) {
            throw new NotFoundException(`La pantalla con id: ${id} no ha sido encontrada o no se ha podido actualizar`);
        }

        return pantallaActualizada;
    }


    async delete(id: string): Promise<Pantalla> {
        const pantallaBorrada = await this.pantallaModel.findByIdAndDelete(id).exec();
        if (!pantallaBorrada) {
            throw new NotFoundException(`La pantalla con id: ${id} no ha podido ser borrada o no se ha encontrado`);
        }

        return pantallaBorrada;
    }
}