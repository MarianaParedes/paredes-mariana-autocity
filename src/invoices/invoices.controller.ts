import { Controller, Get, Query, Param, Post } from '@nestjs/common';

@Controller('invoices')
export class InvoicesController {

    @Get()

    findAll(@Query('location') location: string) {
        return[{location}]
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return{ id }
    }

    @Post()
    create() {

    }
}
