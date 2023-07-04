import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database.service';
import { User } from '../../user/entities/user.entity';
import { Post } from '../../post/entities/post.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './prisma/dev.db',
      entities: [User, Post],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([User, Post]),
  ],
  providers: [DatabaseService],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
