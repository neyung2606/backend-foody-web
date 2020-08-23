import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    MulterModule.register({
      dest: './tmp'
    })  
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
