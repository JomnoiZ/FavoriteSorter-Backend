import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MembersListController } from './members-list.controller';
import { MembersListService } from './members-list.service';

@Module({
  controllers: [MembersListController],
  providers: [MembersListService],
  imports: [PrismaModule, AuthModule],
})
export class MembersListModule {}
