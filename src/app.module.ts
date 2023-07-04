import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseService } from './database/typeorm/database.service';
import { DatabaseModule } from './database/typeorm/database.module';
//import { DatabaseService } from './database/prisma/database.service';
//import { DatabaseModule } from './database/prisma/database.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [DatabaseModule, UserModule, PostModule],
  controllers: [AppController],
  providers: [DatabaseService],
})
export class AppModule {}
