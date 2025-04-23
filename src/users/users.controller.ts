import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get('/:id/{:optional}')
    public getUsers(@Param() params: any, @Query() query: any, @Param('id') id: string) {
        console.log(params); // => { id: string, optional: undefined }
        console.log(query); // for route '/:id/?limit=10&offset=0' => { limit: string, offset: string }
        return 'You sent a get request to users endpoint with the id: ' + id;
    }

    @Post()
    public createUsers(@Body() req: any) {
        console.log(req)
        return 'You sent a post request to users endpoint';
    }
}
