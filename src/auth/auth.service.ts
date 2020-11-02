import { Injectable, ExecutionContext, CanActivate, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService implements CanActivate {
    constructor(private readonly userService: UsersService) {}

    canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        console.log(req.headers)
        const token = req && req.headers.authorization;
        
        if (!token || token.split(' ')[0] !== "Bearer") {
            throw new HttpException('Token Fail', HttpStatus.FORBIDDEN)
        }
        
        try {
            const decode = jwt.verify(token.split(' ')[1], 'cnpm17tclc1');
            return this.userService.checkIdUser(decode.userID) ? true : false;
        } catch {
            throw new HttpException('Token Fail', HttpStatus.FORBIDDEN)
        }
    }
}
