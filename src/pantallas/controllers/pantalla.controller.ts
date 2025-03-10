/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PantallaService } from '../services/pantalla.service';
import { CreatePantallaDto } from '../dtos/create-pantalla.dto';
import { UpdatePantallaDto } from '../dtos/update-pantalla.dto';

@Controller('pantallas')
export class PantallaController {
    constructor(private readonly pantallaService: PantallaService) { }

    @Post()
    create(@Body() createPantallaDto: CreatePantallaDto) {
        return this.pantallaService.create(createPantallaDto);
    }

    @Get()
    find(@Query() query?:any) {
        return this.pantallaService.find(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.pantallaService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePantallaDto: UpdatePantallaDto) {
        return this.pantallaService.update(id, updatePantallaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.pantallaService.delete(id);
    }
}