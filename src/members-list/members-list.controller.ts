import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateMembersListDto } from './dto/create-members-list.dto';
import { UpdateMembersListDto } from './dto/update-members-list.dto';
import { MembersListService } from './members-list.service';

@Controller('members-list')
export class MembersListController {
  constructor(
    private readonly membersListService: MembersListService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getMembersLists() {
    return this.membersListService.getMembersLists();
  }

  @Get('/all')
  getAllMembersList() {
    return this.membersListService.getMembersLists();
  }

  @Get('/:id')
  getMembersList(@Param('id') id: string) {
    return this.membersListService.getMembersList(id);
  }

  @Post()
  createMembersList(
    @Body() createMembersListDto: CreateMembersListDto,
    @Request() req,
  ) {
    const user = this.authService.getProfile(req);
    console.log(user.id);
    return this.membersListService.createMembersList(
      user.id,
      createMembersListDto,
    );
  }

  @Put('/:id')
  updateMembersList(
    @Param('id') id: string,
    @Body() updateMembersListDto: UpdateMembersListDto,
  ) {
    return this.membersListService.updateMembersList(id, updateMembersListDto);
  }

  @Delete('/:id')
  removeMembersList(@Param('id') id: string) {
    return this.membersListService.removeMembersList(id);
  }
}
