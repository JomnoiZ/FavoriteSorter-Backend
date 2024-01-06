import { PartialType } from '@nestjs/mapped-types';
import { CreateMembersListDto } from './create-members-list.dto';

export class UpdateMembersListDto extends PartialType(CreateMembersListDto) {}
