import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMembersListDto } from './dto/create-members-list.dto';
import { UpdateMembersListDto } from './dto/update-members-list.dto';

@Injectable()
export class MembersListService {
  constructor(private prisma: PrismaService) {}

  getMembersLists() {
    return this.prisma.membersList.findMany();
  }

  getMembersList(id: string) {
    return this.prisma.membersList.findUnique({ where: { id } });
  }

  createMembersList(userId, createMembersListDto: CreateMembersListDto) {
    createMembersListDto.userId = userId;
    return this.prisma.membersList.create({ data: createMembersListDto });
  }

  updateMembersList(id: string, updateMembersListDto: UpdateMembersListDto) {
    return this.prisma.membersList.update({
      data: updateMembersListDto,
      where: { id },
    });
  }

  removeMembersList(id: string) {
    return this.prisma.membersList.delete({ where: { id } });
  }
}
