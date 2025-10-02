import { Module } from '@nestjs/common';
import { InvoicesModule } from './invoices/invoices.module';
import { ProfilesController } from './profiles/profiles.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [InvoicesModule, UsersModule],
  controllers: [ProfilesController],
  providers: [],
})
export class AppModule {}
