import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { MembersListModule } from './members-list/members-list.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, PrismaModule, MembersListModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
