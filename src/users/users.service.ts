import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  getUser(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  getUserByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({ data: createUserDto });
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ data: updateUserDto, where: { id } });
  }

  removeUser(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
