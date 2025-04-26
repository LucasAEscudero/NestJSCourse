import { Body, Controller, Get, Ip, Param, Post, Query, Headers, ParseIntPipe, ValidationPipe, Patch } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';

@Controller('users')
export class UsersController {

    @Get('/:id?')
    public getUsers(
        @Param() getUsersParamDto: GetUserParamDto, 
        @Query() query: any, 
        @Param('id', ParseIntPipe) id: number
    ) {
        console.log(getUsersParamDto);
        console.log(query);
        console.log(typeof id, id);
        return 'You sent a get request to users endpoint with the id: ' + id;
    }

    @Post()
    public createUsers(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
        console.log(createUserDto);
        return 'You sent a post request to users endpoint';
    }

    @Patch()
    public updateUsers(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
        return 'You sent a patch request to users endpoint';    
    }
}
